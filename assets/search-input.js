var client = algoliasearch('4X0L5EZUHF', '2c3e03751f5b259ae833fe039896ad2e');
var index = client.initIndex('jekyll');
var myAutocomplete = autocomplete('#search-input', {hint: false}, [
  {
    source: autocomplete.sources.hits(index, {hitsPerPage: 100}),
    displayKey: 'title',
    templates: {
      suggestion: function (suggestion) {
        var sugTemplate = "<h2>" + suggestion._highlightResult.title.value + "</h2>" + "<p>" + suggestion._highlightResult.html.value + "</p>";
        return sugTemplate;
      },
      empty: function(data) {
        return 'No results for "' + data.query + '"';
      },
    }
  }
]).on('autocomplete:selected', function (event, suggestion, dataset) {
  location.href = suggestion.url;
});

//点击重置，显示导航栏
document.querySelector(".searchbox [type='reset']").addEventListener("click", function () {
  var searchbox = document.querySelector(".aa-input");
  var searchnav = document.querySelector(".search-nav");
  if (searchbox.value.length > 0) {
    searchnav.classList.add("hide");
  } else {
    searchnav.classList.remove('hide');
  }
});

//键盘清空搜索框，显示导航栏
document.querySelector("#search-input").addEventListener("keyup", function () {
  var searchbox = document.querySelector(".aa-input");
  var searchnav = document.querySelector(".search-nav");
  if (searchbox.value.length > 0) {
    searchnav.classList.add("hide");
  } else {
    searchnav.classList.remove('hide');
  }
});

//点击重置，清空搜索框
document.querySelector(".searchbox [type='reset']").addEventListener("click", function () {
  document.querySelector(".aa-input").focus();
  this.classList.add("hide");
  myAutocomplete.autocomplete.setVal("");
});

//键盘清空搜索框，隐藏搜索结果
document.querySelector("#search-input").addEventListener("keyup", function () {
  var searchbox = document.querySelector(".aa-input");
  var reset = document.querySelector(".searchbox [type='reset']");
  if (searchbox.value.length === 0) {
    reset.classList.add("hide");
  } else {
    reset.classList.remove('hide');
  }
});