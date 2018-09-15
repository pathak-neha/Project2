window.addEventListener('load', function() {

    var webAuth = new auth0.WebAuth({
      domain: 'lostfound.auth0.com',
      clientID: 'QyZ1PfwttYZwd5LFH5EcU0JljSIq4p6IfeXvXO78NSaHUBPd6ckdMsVhhcQym-Or',
      responseType: 'token id_token',
      scope: 'openid',
      redirectUri: window.location.href
    });
  
    var loginBtn = document.getElementById('btn-login');
  
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      webAuth.authorize();
    });
  
  });