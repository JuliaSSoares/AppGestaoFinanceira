window.onload = function () { var images = ['imagens/bk/02.jpg'];
var image = images[Math.floor(Math.random() * images.length)];
document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
document.getElementsByTagName('body')[0].style.backgroundPositionX = "center";
document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
}