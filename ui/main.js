//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    counter = counter + 1;
    /*//create request object
    var request = new XMLHttpRequest();
    
    //Capture the responce and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;*/
                var span = document.getElementById('count');
                console.log(span);
                span.innerHTML = counter.toString();/*
            }
        }
        //Not done yet
    };
    //Render the variable in the correct span
      //Make request to counter point
      request.open('GET','http://sachinharle.imad.hasura-app.io/counter', true);
      request.send(null);*/
};

/*submit nam4e
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make request to the server and send the name
    
    //Capture a list of names and render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i<names.lenngth;i++){
        list += '<li>'+names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};*/