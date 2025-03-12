/*
 * Hide Menu on Scroll
 */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};


/*
 * search
 */
var searchOpen = document.querySelector("#headerSearch");
var searchPage = document.querySelector("#search");
var searchInput = document.querySelector("#searchInput");
var searchReset = document.querySelector("#searchReset");
var searchNav = document.querySelector("#searchNav");

/* Search Open*/
searchOpen.addEventListener("click", function (event) {
  event.preventDefault();
  searchPage.style.height = "100%";
  searchInput.focus();
  setTimeout(function () {
    document.body.style.overflowY = 'hidden';
  }, 500);
});

/* Search Close by click */
document.querySelector("#searchClose").addEventListener("click", function (event) {
  event.preventDefault();
  searchPage.style.height = "0";
  document.body.style.overflowY = 'visible';
});

/* Search close by Esc key */
searchPage.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 27) {
    searchPage.style.height = "0";
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
var client = algoliasearch('7YS9M2IG5U', 'd8b752b59c77062c10b7d719b83d220b');
var index = client.initIndex('myblog');
var myAutocomplete = autocomplete('#searchInput', {hint: false, debug: true}, [
  {
    source: autocomplete.sources.hits(index, {hitsPerPage: 100}),
    displayKey: 'title',
    templates: {
      suggestion: function (suggestion) {
        return sugTemplate = "<h2>" + suggestion._highlightResult.title.value + "</h2>" + "<p>" + suggestion._highlightResult.content.value + "</p>";
      },
      empty: function (data) {
        return '暂无 "' + data.query + '" 的相关内容';
      },
    }
  }
]).on('autocomplete:selected', function (event, suggestion, dataset) {
  location.href = suggestion.url;
});



/*
 * Archive accordion
 */
var acc = document.getElementsByClassName("archive-category-name");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("archive-category-name-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var urlHash = window.location.hash;
if (urlHash.length > 0) {
  document.getElementById(urlHash).click();
}


/*
 * Comment Form
 */
var commentForm = document.querySelector('.comment-form');
var commentFormInputs = document.querySelectorAll('.comment-form-input');
var sendFailedDiv = document.querySelector('.comment-form-sendFailed');
var sendSucceededDiv = document.querySelector('.comment-form-sendSucceeded');
var overlayDiv = document.querySelector('.comment-form-overlay');

function post(url, data, callback, errorCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else if (xhr.status !== 200) {
      errorCallback(xhr.responseText);
    }
  };
  xhr.send(encodeURI(data));
}

if (commentForm) {
  commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    sendFailedDiv.style.display = 'none';
    sendSucceededDiv.style.display = 'none';
    
    var params = [];
    
    for (var i = 0; i < commentFormInputs.length; i++) {
      var input = commentFormInputs[i];
      params.push(input.name + '=' + input.value);
    }
    
    overlayDiv.style.display = 'flex';
    
    post(e.target.getAttribute('data-action'), params.join('&'), function (text) {
      commentForm.reset();
      sendSucceededDiv.style.display = 'block';
      overlayDiv.style.display = 'none';
    }, function (text) {
      sendFailedDiv.style.display = 'block';
      overlayDiv.style.display = 'none';
    });
  });
}