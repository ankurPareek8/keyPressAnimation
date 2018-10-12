
document.onkeydown = keyanimation;

function keyanimation (){
var keyCode = event.keyCode;
var alphabets = String.fromCharCode(keyCode);

var key = document.createElement('div');
document.body.appendChild(key);

key.style.position = "absolute";

var randX = Math.random()* window.innerWidth;
var randY = Math.random()* window.innerHeight;

key.style.left = randX + 'px';
key.style.top = randY + 'px';

key.innerText= alphabets;

key.style.transition = "all 3.5s linear 0s";
key.style.left = key.offsetLeft - 20 + 'px';
key.style.top = key.offsetTop -450 + 'px';
key.style.fontSize = '200px';
key.style.opacity = 0;
key.style.color = "white";

}



