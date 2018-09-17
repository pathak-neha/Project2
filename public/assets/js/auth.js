
$(document).ready(function () {
  clickLostButtonListener();
  clickFoundButtonListener();
  clicBrowseButtonListener();
  loadUserInfo();
});

function clickLostButtonListener() {
  $('.lostItem').on('click', function (event) {
    event.preventDefault();
    console.log("Enter lost button");
    var newToken = {
      token: localStorage.getItem('session_token')
    };
    // Send the login posts.
    $.ajax('/auth', {
      type: 'GET',
      beforeSend: function (xhr) {
        /* Authorization header */
        xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('session_token'));
      },
    }).then(function (res) {
      console.log(res.status);
      if (res.status === '200') {
        location.replace('/lost');
      }
      else {
        localStorage.clear();
        location.replace('/lost');
      }
    }
    );
  });
};

function clickFoundButtonListener() {
  $('.foundItem').on('click', function (event) {
    event.preventDefault();
    var newToken = {
      token: localStorage.getItem('session_token')

    };
    // Send the login posts.
    $.ajax('/auth', {
      type: 'GET',
      beforeSend: function (xhr) {
        /* Authorization header */
        xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('session_token'));
      },
    }).then(function (res) {
      console.log(res.status);
      if (res.status === '200') {
        location.replace('/found');
      }
      else {
        localStorage.clear();
        location.replace('/found');
      }
    }
    );
  });
}

function clicBrowseButtonListener() {
  $('.browseItem').on('click', function (event) {
    event.preventDefault();
    var newToken = {
      token: localStorage.getItem('session_token')

    };
    // Send the login posts.
    $.ajax('/auth', {
      type: 'GET',
      beforeSend: function (xhr) {
        /* Authorization header */
        xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('session_token'));
      },
    }).then(function (res) {
      console.log(res.status);
      if (res.status === '200') {
        location.replace('/browse-items');
      }
      else {
        localStorage.clear();
        location.replace('/browse-items');
      }
    }
    );
  });
}

function loadUserInfo() {
  if (localStorage.session_token) {
    $('#firstName').val(localStorage.getItem("user_firstName"));
    $('#lastName').val(localStorage.getItem("user_lastName"));
    $('#exampleFormControlInput1').val(localStorage.getItem("user_email"));
    //document.getElementById('firstName').disabled = true;
    // document.getElementById('lastName').disabled = true;
    // document.getElementById('exampleFormControlInput1').disabled = true;

  }
};