var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg', 'bg9.jpg'];
var dir = '/static/img/';
var index = Math.floor(Math.random() * images.length);
document.getElementById("dashboard").style.backgroundImage = "url(" + dir + images[index] + ")";