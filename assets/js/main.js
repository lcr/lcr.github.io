/*
 * Headroom
 */
var Header = document.querySelector('.js-headroom');
var headroom = new Headroom(Header, {
  "offset": 50,
  "tolerance": 5,
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
var searchOpen = document.querySelector("#headerSearch");
var searchPage = document.querySelector("#search");
var searchInput = document.querySelector("#searchInput");
var searchReset = document.querySelector("#searchReset");
var searchNav = document.querySelector("#searchNav");

/* Search Open*/
searchOpen.addEventListener("click", function (event) {
  event.preventDefault();
  searchPage.style.transform = "translateY(100vh)";
  searchInput.focus();
  setTimeout(function () {
    document.body.style.overflowY = 'hidden';
  }, 500);
});

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
 * back to top
 */
var backTop = document.getElementById("backTop");
var timer = null;
var isTop = true;
window.onscroll = function () {
  if (!isTop) {
    clearInterval(timer);
  }
  isTop = false;
};
backTop.onclick = function () {
  timer = setInterval(function () {
    var toTop = document.body.scrollTop || document.documentElement.scrollTop;
    var speed = Math.ceil(toTop / 10);
    document.documentElement.scrollTop = document.body.scrollTop = toTop - speed;
    isTop = true;
    if (toTop === 0) {
      clearInterval(timer);
    }
  }, 20);
};


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



const commentForm = document.querySelector('.comment-form');
const commentFormInputs = document.querySelectorAll('.comment-input');
const slugInput = document.querySelector('.comment-input-slug');
const optionsSlugInput = document.querySelector('.comment-input-optionsSlug');
const catchInput = document.querySelector('.comment-input-catch');
const nameInput = document.querySelector('.comment-input-name');
const emailInput = document.querySelector('.comment-input-email');
const messageInput = document.querySelector('.comment-input-message');
const sendFailedDiv = document.querySelector('.comment-sendFailed');
const errorMessagesDiv = document.querySelector('.comment-errorMessages');
const sendSucceededDiv = document.querySelector('.comment-sendSucceeded');
const overlayDiv = document.querySelector('.comment-overlay');

function post(url, data, callback, errorCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else if (xhr.status !== 200) {
      errorCallback(xhr.responseText);
    }
  };
  xhr.send(encodeURI(data));
}

if (commentForm) {
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // errorMessagesDiv.innerHTML = '';
    sendFailedDiv.style.display = 'none';
    sendSucceededDiv.style.display = 'none';
    
    const slug = slugInput.value.trim();
    const optionsSlug = optionsSlugInput.value.trim();
    const name = nameInput.value.trim();
    const catchValue = catchInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    let error = false;
    let fatalError = false;
    const messages = [];
    
    if (slug === '' || slug !== optionsSlug || catchValue !== '') {
      fatalError = true;
    }
    
    // if (name.length < 2) {
    //   error = true;
      // messages.push('Please enter name');
    // }
    
    // if (email.search(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) === -1) {
    //   error = true;
      // messages.push('Please enter valid email');
    // }
    
    // if (message.length < 2) {
    //   error = true;
      // messages.push('Please enter message');
    // }
    
    if (fatalError) {
      return false;
    }
    
    // if (error) {
    //   errorMessagesDiv.innerHTML = messages.join('<br>');
    //   return false;
    // }
    
    
    const params = [];
    
    for (let i = 0; i < commentFormInputs.length; i++) {
      const input = commentFormInputs[i];
      params.push(`${ input.name }=${ input.value }`);
    }
    
    overlayDiv.style.display = 'flex';
    
    post(
      e.target.getAttribute('data-action'),
      params.join('&'),
      function(text){
        commentForm.reset();
        sendSucceededDiv.style.display = 'block';
        overlayDiv.style.display = 'none';
      },
      function(text){
        sendFailedDiv.style.display = 'block';
        overlayDiv.style.display = 'none';
      }
    );
  });
}