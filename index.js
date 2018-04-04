
//charSwap();
//hi();
//threeCharToFront();
//stringsToSentence();
upperOrLower();

function charSwap(){

    var person = prompt("Please enter your name", "");
    if (person == null){
    	console.log("user pressed cancel, try again");
    	charSwap();
    }
    if (person == ""){
    	console.log("input empty, try again");
    	charSwap();
    }
    if (person != null) {
    	console.log(person);
    	var first = person.charAt(0);
    	var last = person.slice(-1);

    	var newPerson =last+ person.slice(1,length-1)+first;
        console.log(newPerson)
    }


}


function hi(){
	flag = 0;
    var person = prompt("Please enter your name", "");
    if (person == null){
    	console.log("user pressed cancel, try again");
    	hi();
    }
    if (person == ""){
    	console.log("input empty, try again");
    	hi();
    }
    if (person.charAt(0)=="H" || person.charAt(1)=="i"){
    	console.log(person);
    	var newPerson =person.slice(3);
    	flag = 1;
    	console.log(newPerson);

    }
    if (flag == 0){  


    	var newPerson ="Hi "+ person
        console.log(newPerson)
    }
    


}


function threeCharToFront(){

    var person = prompt("Please enter your name", "");

    if (person == null){
    	console.log("user pressed cancel, try again");
    	threeCharToFront();
    }
    if (person == ""){
    	console.log("input empty, try again");
    	threeCharToFront();
    }
    if (person.length <3){
    	console.log("input not long enough, try again");
    	threeCharToFront();
    }

    if (person != null ) {
    	console.log(person);
    	var letters = person.slice(length-3);
    	var more = person.slice(0,length-3);
    	var newPerson =letters+ more;
        console.log(newPerson)
    }


}
/*
Strings to Sentence - Write a JavaScript function that asks for a list of items from the
user separated by commas. Convert this to an array without the commas or extra
spaces. Alert the items back to the user with a single saying that is formed using
backticks (``).
Example:
input from user: blue, dogs, chocolate
output from function: My favorite color is blue, dogs are awesome, and I love chocolate!
*/
function stringsToSentence(){


    var sentence = prompt("Please enter your name", "");

    if (sentence == null){
    	console.log("user pressed cancel, try again");
    	stringsToSentence();
    }
    if (sentence == ""){
    	console.log("input empty, try again");
    	stringsToSentence();
    }


    if (sentence != null ) {
    	var arr = sentence.split(",");

        console.log(arr);

        console.log(`My favorsite color is ${arr[0]}, ${arr[1]} are awesome, and I love ${arr[2]}`)
    }

}


upperOrLower(){
	var input = prompt("Please enter your name", "");

    if (input == null){
    	console.log("user pressed cancel, try again");
    	upperOrLower();
    }
    if (sentence == ""){
    	console.log("input empty, try again");
    	upperOrLower();
    }

    if (input.length <3){


    }

    if (input != null || input.length>3) {
    	var arr = input.split(",");

        console.log(arr);

        console.log(`My favorsite color is ${arr[0]}, ${arr[1]} are awesome, and I love ${arr[2]}`)
    }


}
