//counter code
var button = document.getElementById('counter');

button.onclick = function(){
   // counter = counter + 1;
    //create request object
    var request = new XMLHttpRequest();
    
    //Capture the responce and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Render the variable in the correct span
      //Make request to counter point
      request.open('GET','http://sachinharle.imad.hasura-app.io/counter', true);
      request.send(null);
};

//submit name



var submit = document.getElementById('submit_btn');
submit.onclick = function (){

    //create request object
    var request = new XMLHttpRequest();
    
    //Capture the responce and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                //Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0;i<names.length;i++){
                	list += '<li>' + names[i] + '</li>';
                
                	}
                	var ul = document.getElementById('namelist');
                	ul.innerHTML = list;
            }
        }
        //Not done yet
    };
    //Render the variable in the correct span
      //Make request to counter point
      var nameInput = document.getElementById('name');
      var name = nameInput.value;
      request.open('GET','http://sachinharle.imad.hasura-app.io/submit-name?name=' + name, true);
      request.send(null);
//Make request to Server and send the name

};