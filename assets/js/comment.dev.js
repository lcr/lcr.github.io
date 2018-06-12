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