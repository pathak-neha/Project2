$(document).ready(function () {
  clickSingInButtonListener();
});

function clickSingInButtonListener() {
  $('#signInButton').on('click', function (event) {
    event.preventDefault();
    console.log('enter clickSigninbutton');

    var signEmail = $('#exampleDropdownFormEmail1').val().trim().toLowerCase();
    var signPass = $('#exampleDropdownFormPassword1').val();
    console.log('user: ' + signEmail);
    console.log('pass: ' + signPass);

    // var newUserDevoured = true;
    var newUser = {
      email: signEmail,
      pass: signPass
    };

    // Send the login request.
    $.ajax('/api/login/', {
      type: 'POST',
      data: newUser
    }).then(function (res) {
      console.log('token json', res);
      // Reload the page to get the updated list
      location.replace('/');
    }
    );
  });
}