/*trueFalse();
trueFalse2(); */
numInput();


var bob = new Person("bob", "johnson", "12");

var bob2 = new clonePerson(bob, "5");

console.log("first object",bob.firstName+" "+bob.lastName+" "+bob.age);
console.log("cloned object",bob.firstName+" "+bob.lastName+" "+bob.age+" "+bob2.height);

function trueFalse() {
    var txt;
    var r = confirm("Press a button!");
    if (r == true) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}

function trueFalse2() {
    var txt;
    var r = confirm("Press a button!");

    
        txt = (r)? "You pressed OK!": "You pressed Cancel!";
    
    document.getElementById("demo").innerHTML = txt;
}

function numInput(){
	var input = prompt("Enter a number", "");

    if (input == null) {
        alert("no text entered");
    }
    else if (isNaN(input)){
    	alert("input is not a number");
    }
    else if (isNaN(input)==false){
    	alert("input good");
    }
}

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName=first+" "+last;
}

function clonePerson( person, height){
	this.firstName = person.first;
    this.lastName = person.last;
    this.age = person.age;
    this.fullName=person.first+" "+person.last;
    if (height != null){
    	this.height=height;
    }
}

/*
function myFunction(string1, string2, string3) {

	if (string3==null){
		string3="default";
	}
    return string1 + string2+string3;
}*/
/*
var string= myFunction(string1, string2, string3){if (string3==null){
		string3="default";
	}
    return string1 + string2+string3;}*/
/*
var x =(string1, string2, string3) => {if (string3==null){
		string3="default";
	}
    return string1 + string2+string3;};*/