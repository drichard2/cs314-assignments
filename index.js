// to run just remove comment stuff from the function call for each individually (one function at a time)
//1   charSwap();
//2   hi();
//3   threeCharToFront();
//4   stringsToSentence();
//5   upperOrLower();
//6  integerSwap();
//7 longestString();
//8 longestEvenNumber();
//9 currDateTime();
//10 unlmArgs("bob","john","ron");

firstRun();

function firstRun(){
	alert ("to run tests on functions just remove comment stuff from the function call for each individually (one function at a time)");
}


function unlmArgs(){
	
	var stringarr="";

	for (var i = 0; i < arguments.length; ++i)
    	stringarr= stringarr+(arguments[i]);
    alert(stringarr);

}

function currDateTime(){

	var date = new Date();
	var dayNum = date.getDay();
	var day = "string";
	if(dayNum == 0){
		day= "Sunday";
	}
	if(dayNum == 1){
		day= "Monday";
	}
	if(dayNum == 2){
		day= "Tuesday";
	}
	if(dayNum == 3){
		day= "Wednesday";
	}
	if(dayNum == 4){
		day= "Thursday";
	}
	if(dayNum == 5){
		day= "Friday";
	}
	if(dayNum == 6){
		day= "Saturday";
	}

	var minutes = date.getMinutes();
	var hour = date.getHours()-12;

	var dateMSG = "Today is "+ day+"\n"+ "The time is "+ hour+":"+minutes;




	alert(dateMSG);

}

function longestEvenNumber(){

	var input = prompt("Please enter a list of numbers separated by comma", "");

    	if (input == null){
    		console.log("user pressed cancel, try again");
    		longestString();
    	}
    	if (input == ""){
    		console.log("input empty, try again");
   	 		longestString();
    	}
  		

    	if (input != null ) {
    		var arr=input.split(",");

    		var num = 0;
    		for (var i = 0; i < arr.length; i++){
    			if (arr[i]>= num){
    				if((arr[i] & 1)==0){
    					num=arr[i];
    				}
    			}
    		}
    	alert(num);
		}		
}




function longestString(){

	var input = prompt("Please enter a list of strings separated by comma", "");

    	if (input == null){
    		console.log("user pressed cancel, try again");
    		longestString();
    	}
    	if (input == ""){
    		console.log("input empty, try again");
   	 		longestString();
    	}
  		

    	if (input != null ) {
    		var words = input.split(",");
    		var longest = '';

  		for (var i = 0; i < words.length; i++) {
    		if (words[i].length > longest.length) {
      		longest = words[i];
    		}
  		}
  		console.log(longest);
  		alert(longest);
    	}
}

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
        alert(newPerson);
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
    	alert(newPerson)

    }
    if (flag == 0){  


    	var newPerson ="Hi "+ person
        console.log(newPerson)
        alert (newPerson)
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
        alert(newPerson);
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


    var sentence = prompt("Please enter strings separated by comma", "");

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
    	alert(`My favorsite color is ${arr[0]}, ${arr[1]} are awesome, and I love ${arr[2]}`);
    }

}


function upperOrLower(){
	var input = prompt("Please enter your name", "");

    if (input == null){
    	console.log("user pressed cancel, try again");
    	upperOrLower();
    }
    if (input == ""){
    	console.log("input empty, try again");
    	upperOrLower();
    }

    if (input.length <3){
    	var newInput = input.toUpperCase();
    	console.log(newInput);
    	alert(newInput);

    }

    if (input != null && input.length>3) {
    	
    	console.log(input.charAt(0).toUpperCase() + input.charAt(1).toUpperCase()+input.charAt(2).toUpperCase()+input.slice(3));
        alert(input.charAt(0).toUpperCase() + input.charAt(1).toUpperCase()+input.charAt(2).toUpperCase()+input.slice(3));
    }

}


function integerSwap(){

	var input = prompt("Please enter list of integers separated by commas", "");

    if (input == null){
    	console.log("user pressed cancel, try again");
    	integerSwap();
    }
    if (input == ""){
    	console.log("input empty, try again");
    	integerSwap();
    }

  

    if (input != null ) {
    	
    	arra = input.split(",");
    	[arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    	console.log(arra);
    	alert(arra);
    }
}
