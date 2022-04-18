var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var b = ['1','2','3','4','5']
var selectedPic 
var a = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'] ;
for(a = 1 ; a < 6 ; a++) {

};

function createNewPic (selectedPic) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${selectedPic}.jpg`);
  thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */

