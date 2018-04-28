$(document).ready(function(){
    $("button").click(function(){
        $.get("https://jsonplaceholder.typicode.com/users", function(id, name){
            alert("Data: " + id + "\nStatus: " + name);
        });
    });
});