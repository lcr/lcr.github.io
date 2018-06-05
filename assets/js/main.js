/*
 * Headroom
 */
var Header = document.querySelector('.js-headroom');
var headroom = new Headroom(Header, {
  "offset": 100,
  "tolerance": 10,
  classes: {
    initial: "js-headroom",
    pinned: "js-headroom--pinned",
    unpinned: "js-headroom--unpinned"
  }
});
headroom.init();


/*
 * search
 */
var searchOpen = document.querySelectorAll("#headerSearch,#footerSearch");
var searchPage = document.querySelector("#search");
var searchInput = document.querySelector("#searchInput");
var searchReset = document.querySelector("#searchReset");
var searchNav = document.querySelector("#searchNav");

/* header nav & footer nav 点击search，打开搜索页面*/
for (i = 0; i < searchOpen.length; i++) {
  searchOpen[i].addEventListener("click", function (event) {
    event.preventDefault();
    searchPage.style.transform = "translateY(100vh)";
    if (window.innerWidth > 650) {
      searchInput.focus();
    }
    setTimeout(function () {
      document.body.style.overflowY = 'hidden';
    }, 500);
  });
}

/* 鼠标点击X,关闭搜索页面 */
document.querySelector("#searchClose").addEventListener("click", function (event) {
  event.preventDefault();
  searchPage.style.transform = 'translateY(-100vh)';
  document.body.style.overflowY = 'visible';
});

/* Esc键关闭搜索页面 */
searchPage.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 27) {
    searchPage.style.transform = 'translateY(-100vh)';
    document.body.style.overflowY = 'visible';
  }
});

/* 点击重置，清空搜索框，显示导航栏 */
searchReset.addEventListener("click", function () {
  this.style.display = 'none';
  searchInput.focus();
  myAutocomplete.autocomplete.setVal("");
  if (searchInput.value.length > 0) {
    searchNav.style.display = 'none';
  } else {
    searchNav.style.display = 'block';
  }
});

/* 键盘清空搜索框，隐藏搜索结果，显示导航栏 */
searchInput.addEventListener("keyup", function () {
  if (searchInput.value.length > 0) {
    searchNav.style.display = 'none';
    searchReset.style.display = 'block';
  } else {
    searchNav.style.display = 'block';
    searchReset.style.display = 'none';
  }
});


/*
 * search-autocomplete
 */
var client = algoliasearch('4X0L5EZUHF', '2c3e03751f5b259ae833fe039896ad2e');
var index = client.initIndex('jekyll');
var myAutocomplete = autocomplete('#searchInput', {hint: false}, [
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
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-107157614-1', 'auto');
ga('send', 'pageview');