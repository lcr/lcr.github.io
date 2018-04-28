var client = algoliasearch("4X0L5EZUHF", "2c3e03751f5b259ae833fe039896ad2e");
var index = client.initIndex('jekyll');
var myAutocomplete = autocomplete('#search-input', {hint: false}, [
  {
    source: autocomplete.sources.hits(index, {hitsPerPage: 100}),
    displayKey: 'title',
    templates: {
      suggestion: function (suggestion) {
        var sugTemplate = "<h2>" + suggestion._highlightResult.title.value + "</h2>" + "<span>" + suggestion._highlightResult.excerpt_text.value + "</span>";
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

document.querySelector(".searchbox [type='reset']").addEventListener("click", function () {
  document.querySelector(".aa-input").focus();
  this.classList.add("hide");
  myAutocomplete.autocomplete.setVal("");
});

document.querySelector("#search-input").addEventListener("keyup", function () {
  var searchbox = document.querySelector(".aa-input");
  var reset = document.querySelector(".searchbox [type='reset']");
  if (searchbox.value.length === 0) {
    reset.classList.add("hide");
  } else {
    reset.classList.remove('hide');
  }
});