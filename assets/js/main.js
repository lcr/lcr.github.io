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

/* Search Open*/
for (i = 0; i < searchOpen.length; i++) {
  searchOpen[i].addEventListener("click", function (event) {
    event.preventDefault();
    searchPage.style.transform = "translateY(100vh)";
    searchInput.focus();
    setTimeout(function () {
      document.body.style.overflowY = 'hidden';
    }, 500);
  });
}

/* Search Close by click */
document.querySelector("#searchClose").addEventListener("click", function (event) {
  event.preventDefault();
  searchPage.style.transform = 'translateY(-100vh)';
  document.body.style.overflowY = 'visible';
});

/* Search close by Esc key */
searchPage.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 27) {
    searchPage.style.transform = 'translateY(-100vh)';
    document.body.style.overflowY = 'visible';
  }
});

/* Search reset & nav show by click */
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

/* Search reset & nav show by key */
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
autocomplete('#searchInput', {hint: false}, [
  {
    source: autocomplete.sources.hits(index, {hitsPerPage: 100}),
    displayKey: 'title',
    templates: {
      suggestion: function (suggestion) {
        return sugTemplate = "<h2>" + suggestion._highlightResult.title.value + "</h2>" + "<p>" + suggestion._highlightResult.content.value + "</p>";
      },
      empty: function (data) {
        return 'No results for "' + data.query + '"';
      },
    }
  }
]).on('autocomplete:selected', function (event, suggestion) {
  location.href = suggestion.url;
});


/*
 * Archive page Accordion Check
 */
var urlHash = window.location.hash;
if (urlHash.length > 0) {
  var inputCheck = document.getElementById(urlHash);
  inputCheck.checked = true;
}

/*
 * google analytics
 */
window.ga = window.ga || function () {
  (ga.q = ga.q || []).push(arguments)
};
ga.l = +new Date;
ga('create', '{{ site.google_analytics }}', 'auto');
ga('send', 'pageview');