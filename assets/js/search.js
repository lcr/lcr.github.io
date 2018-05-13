/*
 * search-open
 */
var searchopen = document.querySelector("#search");
var searchfocus = document.querySelector("#search-input");
document.querySelector("a[href='#search']").addEventListener("click", function (event) {
  event.preventDefault();
  searchopen.style.display = 'block';
  if (window.innerWidth > 650) {
    searchfocus.focus();
  }
  document.body.style.overflowY = 'hidden';
});
document.querySelector("a[href='#footer-search']").addEventListener("click", function (event) {
  event.preventDefault();
  searchopen.style.display = 'block';
  if (window.innerWidth > 650) {
    searchfocus.focus();
  }
  document.body.style.overflowY = 'hidden';
});
document.querySelector(".search-close").addEventListener("click", function (event) {
  event.preventDefault();
  searchopen.style.display = '';
  document.body.style.overflowY = 'visible';
});

document.querySelector("#search").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 27) {
    searchopen.style.display = '';
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
var searchbox = document.querySelector(".aa-input");
var searchnav = document.querySelector(".search-nav");
var reset = document.querySelector(".searchbox [type='reset']");

/* 点击重置，清空搜索框，显示导航栏 */
document.querySelector(".searchbox [type='reset']").addEventListener("click", function () {
  searchbox.focus();
  this.style.display = 'none';
  myAutocomplete.autocomplete.setVal("");
  if (searchbox.value.length > 0) {
    searchnav.style.display = 'none';
  } else {
    searchnav.style.display = 'block';
  }
});

/* 键盘清空搜索框，隐藏搜索结果，显示导航栏 */
document.querySelector("#search-input").addEventListener("keyup", function () {
  if (searchbox.value.length > 0) {
    searchnav.style.display = 'none';
  } else {
    searchnav.style.display = 'block';
  }
  if (searchbox.value.length === 0) {
    reset.style.display = 'none';
  } else {
    reset.style.display = 'block';
  }
});