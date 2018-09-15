$(document).ready(function () {
    clickLostButtonListener();
  
  });

var myAPI = 'gOTqEakr9peRuYj037Qe6HcAE3YrYh1w';

var randomGifNumber = randomIntFromInterval(0, 49);
console.log(randomGifNumber)


var item = 'searching';
var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + item + '&limit=50&&api_key=' + myAPI;
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {

    var imgURL = response.data[randomGifNumber].images.fixed_height_small.url;

    $('.imgArea').attr('src', imgURL)
});

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function clickLostButtonListener() {
  $('#lostItem').on('click', function (event) {
      
      event.preventDefault();
      console.log("Enter lost button");
      var newToken = {
        token: localStorage.getItem('session_token')
    
      };
      // Send the login posts.
      $.ajax('/lost/auth', {
        type: 'GET',
        beforeSend: function(xhr) {
          /* Authorization header */
          xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('session_token'));
      },
      }).then(function (res){
        console.log(res.status);
        if(res.status ==='200'){
            location.replace('/lost');
                 }
                 else{
                    location.replace('*');
                 }
      }
      );
    });
  }



