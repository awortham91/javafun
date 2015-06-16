var name = prompt('What is your name?');
var win = 0
var lose = 0
var i = 1

document.getElementById("input").onmouseover = function() {playGame()};

function playGame() {
var number = Math.floor(Math.random() * 2);
var input = prompt('Enter a number between 1 and 2.');
  if (Number(input) === number) {
    win ++;
    alert('nice JOB! ' + name + ' you have won ' + Math.round(win/i * 100) + '%');
    i++;
  } else {
    alert(name + ', you suck at guessing!' + ' you have won ' + Math.round(win/i * 100) + '%');
    i++;
}}


document.getElementById("color").onclick=function() {changeBGC()};

function changeBGC(){

for (col = 1; col < 100000; col++) {

setTimeout("document.getElementById('hi').style.backgroundColor = getRandomColor()", col * 2000);
setTimeout("document.getElementById('bye').style.backgroundColor = getRandomColor()", col * 2000);
setTimeout("document.getElementById('why').style.backgroundColor = getRandomColor()", col * 2000);
setTimeout("document.getElementById('lie').style.backgroundColor = getRandomColor()", col * 2000);
}}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var g = 0; g < 6; g++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
