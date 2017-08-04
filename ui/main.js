//counter code
//var counter = 0;

var button = document.getElementById('counter');
var marginLeft = 0;

button.onclick = function(){
    //create request object
    var request = new XMLHttpRquest();
    
    //Capture the responce and store it in a variable
    request.onreadystatechange = function (){
        if(request.readyState===XMLHttpRquest.DONE)
            //take some action
            if(requestr.status===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    //Render the variable in the correct span
      //Make request to counter point
      request.open('GET','http://sachinharle.imad.hasura-app.io/counter', true);
      request.send(null);
};
