//counter code
var counter = 0;

var button = document.getElementById('counter');
var marginLeft = 0;

button.onclick = function(){
    //Make request to counter point
    //Capture the responce and store it in a variable
    
    //Render the variable in the correct span
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
