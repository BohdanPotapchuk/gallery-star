var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
/* (задача1) (я сделал цикл FOR,а так же константу с путями ввиде стор к изображениям ) Поместите раздел кода под комментарием  Looping through images  внутри цикла, который перебирает все 5 изображений - вам просто нужно перебрать пять чисел, каждое из которых представляет каждое изображение.*/
/* (задача2) В каждой итерации цикла замените значение-заполнитель xxx строкой, которая будет равна пути к изображению в каждом случае. Мы устанавливаем значение атрибута src для этого значения в каждом случае. Имейте в виду, что в каждом случае изображение находится внутри каталога изображений, а его имя - pic1.jpg, pic2.jpg и т.д. */

const a = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg']
for(a ; a < 4 ; a++) {
   
}

  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/');
  thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

