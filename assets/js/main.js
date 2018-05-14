/*
 * search-open
 */
var searchOpen = document.querySelector("#search");
var searchFocus = document.querySelector("#search-input");

/* header nav 点击search，打开搜索页面*/
document.querySelector("a[href='#search']").addEventListener("click", function (event) {
  event.preventDefault();
  searchOpen.style.display = 'block';
  if (window.innerWidth > 650) {
    searchFocus.focus();
  }
  document.body.style.overflowY = 'hidden';
});

/* footer nav 点击search，打开搜索页面*/
document.querySelector("a[href='#footer-search']").addEventListener("click", function (event) {
  event.preventDefault();
  searchOpen.style.display = 'block';
  if (window.innerWidth > 650) {
    searchFocus.focus();
  }
  document.body.style.overflowY = 'hidden';
});

/* 鼠标点击X,关闭搜索页面 */
document.querySelector(".search-close").addEventListener("click", function (event) {
  event.preventDefault();
  searchOpen.style.display = '';
  document.body.style.overflowY = 'visible';
});

/* Esc键关闭搜索页面 */
document.querySelector("#search").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 27) {
    searchOpen.style.display = '';
    document.body.style.overflowY = 'visible';
  }
});


/*
 * search-autocomplete
 */
var client = algoliasearch('4X0L5EZUHF', '2c3e03751f5b259ae833fe039896ad2e');
var index = client.initIndex('jekyll');
var myAutocomplete = autocomplete('#search-input', {hint: false}, [
  {
    source: autocomplete.sources.hits(index, {hitsPerPage: 100}),
    displayKey: 'title',
    templates: {
      suggestion: function (suggestion) {
        var sugTemplate = "<h2>" + suggestion._highlightResult.title.value + "</h2>" + "<p>" + suggestion._highlightResult.content.value + "</p>" || "<h2>" + suggestion._highlightResult.title.value + "</h2>" + "<p>" + suggestion._highlightResult.headings.value + "</p>";
        return sugTemplate;
      },
      empty: function (data) {
        return 'No results for "' + data.query + '"';
      },
    }
  }
]).on('autocomplete:selected', function (event, suggestion, dataset) {
  location.href = suggestion.url;
});

/*
 * search-reset
 */
var searchBox = document.querySelector(".aa-input");
var searchNav = document.querySelector(".search-nav");
var searchReset = document.querySelector(".searchbox [type='reset']");

/* 点击重置，清空搜索框，显示导航栏 */
document.querySelector(".searchbox [type='reset']").addEventListener("click", function () {
  searchBox.focus();
  this.style.display = 'none';
  myAutocomplete.autocomplete.setVal("");
  if (searchBox.value.length > 0) {
    searchNav.style.display = 'none';
  } else {
    searchNav.style.display = 'block';
  }
});

/* 键盘清空搜索框，隐藏搜索结果，显示导航栏 */
document.querySelector("#search-input").addEventListener("keyup", function () {
  if (searchBox.value.length > 0) {
    searchNav.style.display = 'none';
  } else {
    searchNav.style.display = 'block';
  }
  if (searchBox.value.length === 0) {
    searchReset.style.display = 'none';
  } else {
    searchReset.style.display = 'block';
  }
});

/*
 * Accordion Check
 */
var urlHash = window.location.hash;
if (urlHash.length > 0) {
  var inputCheck = document.getElementById(urlHash);
  inputCheck.checked = true;
}

/*
 * Google Analytics
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-107157614-1', 'auto');
ga('send', 'pageview');