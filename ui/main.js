//output on console
console.log('Loaded!');
//write an alert
alert('Hi Sachin, want to proceed');
//change the text from element "main-text"
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
    marginLeft += 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};
