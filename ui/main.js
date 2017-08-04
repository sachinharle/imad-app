//output on console
console.log('Loaded!');
//write an alert
alert('Hi Sachin, want to proceed');
//change the text from element "main-text"
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
};
