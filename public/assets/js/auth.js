
$(document).ready(function () {
  checkToken();
  loadUserInfo();
});

function checkToken() {
  $.ajax('/auth', {
    type: 'GET',
    beforeSend: function (xhr) {
      /* Authorization header */
      xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('session_token'));
    },
  }).then(function (res) {
    console.log(res.status);
    if (res.status === '200') {
    }
    else {
      localStorage.clear();
    }
  }
  );

};

function loadUserInfo() {
  if (document.getElementById('firstName') !== null) {
    document.getElementById('firstName').disabled = true;
    document.getElementById('lastName').disabled = true;
    document.getElementById('exampleFormControlInput1').disabled = true;
    document.getElementById('exampleFormControlInput2').disabled = true;
  }
  if (localStorage.session_token) {
    if (localStorage.user_welcome) {
      $('#welcomUser').text(localStorage.getItem("user_welcome"));
    }
    $('#firstName').val(localStorage.getItem("user_firstName"));
    console.log(localStorage.getItem("user_lastName"));
    $('#lastName').val(localStorage.getItem("user_lastName"));
    $('#exampleFormControlInput1').val(localStorage.getItem("user_email"));

  } else {
   
    $('#welcomUser').text('Please SignIn or SignUp to continue ');
    $('.notSignedMessage').text('Please SignIn or SignUp if you have account set-up');
    if (document.getElementById('enterFoundItems') !== null) {
      document.getElementById('enterFoundItems').disabled = true;
    }
    if (document.getElementById('enterLostItems') !== null) {
      document.getElementById('enterLostItems').disabled = true;
    }
    if (document.getElementById('searchBtn') !== null) {
      document.getElementById('searchBtn').disabled = true;
    }

    
  }
};