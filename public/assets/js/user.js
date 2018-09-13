$(document).ready(function () {
  clickSingInButtonListener();
  //clickSingUpButtonListener();
});

function clickSingInButtonListener() {
  $('#signInButton').on('click', function (event) {
    event.preventDefault();
    console.log('enter clickSigninbutton');

    var signEmail = $('#exampleDropdownFormEmail1').val().trim().toLowerCase();
    var signPass = $('#exampleDropdownFormPassword1').val().trim();
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
    }).then(function (res){
      console.log("token: "+res.token);
      localStorage.setItem("session_token", res.token);
      localStorage.setItem("user_id", res.id);
      // Reload the page to get the updated list
     location.replace('/');
    }
    );
  });
}


function clickSingUpButtonListener() {
  $('#signUpButton').on('click', function (event) {
    
    event.preventDefault();
    // var newToken = {
    //   token: localStorage.getItem('session_token')
  
    // };
    // // Send the login posts.
    // $.ajax('/api/posts/', {
    //   type: 'POST',
    //   beforeSend: function(xhr) {
    //     /* Authorization header */
    //     xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('session_token'));
    // },
    // }).then(function (res){
    //   console.log(res);
      
    // }
    // );
  });
}
