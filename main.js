var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var selectedPic 
for(a = 1 ; a < 6 ; a++) {

};

function createNewPic (selectedPic) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${selectedPic}.jpg`);
  thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */

