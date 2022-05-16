/*
    Slider Manager
*/ 
let slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slider_bullet_button");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
/*
    Api management
*/
// set endpoint and your access key
let ip = '134.201.250.155'
ip = "https://api.ipstack.com/check/?access_key=ffab8e1936dd90448d0a2a2988960753"
/*
    Script to get the JSON file from an API url
 */
var getJSON = function(url, callback) {

    var xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open('GET', url, true);
    xmlhttprequest.responseType = 'json';

    xmlhttprequest.onload = function() {

        var status = xmlhttprequest.status;

        if (status == 200) {
            callback(null, xmlhttprequest.response);
        } else {
            callback(status, xmlhttprequest.response);
        }
    };

    xmlhttprequest.send();
};
/*
    Script to get the country name of the user from the JSON File
 */
getJSON('https://api.ipstack.com/check/?access_key=ffab8e1936dd90448d0a2a2988960753',  function(err, data) {

    if (err != null) {
        console.error(err);
    } else {

       var display = `${data.country_name}`;
    }
    let country = document.querySelector('.api')
    country.value= display
});

