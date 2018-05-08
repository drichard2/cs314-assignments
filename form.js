function submit(){
	console.log("test");

	var firstname = document.getElementById("firstname").value;

	if (firstname.length ==0){
		//alert("Firstname not valid!");
		var error = document.getElementById("error");
		var msg = "Firstname Not Valid!";
		error.replaceChild(document.createTextNode(msg), error.childNodes[0]);
		return;
	}
	
	var lastname = document.getElementById("lastname").value;
	if (lastname.length ==0){
		var error = document.getElementById("error");
		var msg = "Lastname Not Valid!";
		error.replaceChild(document.createTextNode(msg), error.childNodes[0]);
		//alert("Last Name not Valid");
		return;
		
	}
	var phone = document.getElementById("number").value;

	
	if (!validatePhone(phone)){
		return;
	}
	

	var email = document.getElementById("email").value;


	if (!checkEmail(email)){
		//alert("email not valid");
		var error = document.getElementById("error");
		var msg = "Email Not Valid!";
		error.replaceChild(document.createTextNode(msg), error.childNodes[0]);

		return;
	}

	
	var message = document.getElementById("message").value;

	if (message.length ==0){
	
		var error = document.getElementById("error");
		var msg = "No Message Entered!";
		error.replaceChild(document.createTextNode(msg), error.childNodes[0]);
		return;
	}


	var error = document.getElementById("error");
	var msg = "";
	error.replaceChild(document.createTextNode(msg), error.childNodes[0]);

	var item = document.getElementById('newtext');
	console.log(item);
    item.replaceChild(document.createTextNode("From: "+firstname+" "+lastname),item.childNodes[0]);



    var semail = document.getElementById('semail');
    var snumber = document.getElementById('snumber');


    semail.replaceChild(document.createTextNode("Email: "+email),semail.childNodes[0]);
	snumber.replaceChild(document.createTextNode("Phone: "+phone), snumber.childNodes[0]);

    var content = document.getElementById('content');
    content.replaceChild(document.createTextNode(message),content.childNodes[0]);

    var button = document.getElementById("button")

    resetForm();

}

function resetForm(){
	var firstname = document.getElementById("firstname");
	var lastname = document.getElementById("lastname");
	var phone = document.getElementById("number");
	var email = document.getElementById("email");
	var message = document.getElementById("message");



	firstname.value="";
	lastname.value="";
	phone.value="";
	email.value="";
	message.value="";


}

function checkEmail( email) {

    //i found this online, I have no idea how it works
 	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
}

function validatePhone(fld) {
 
    var stripped = fld.replace(/[\(\)\.\-\ ]/g, '');     

   if (fld == "") {
        //alert("You didn't enter a phone number.\n");
        var error = document.getElementById("error");
		var msg = "You didn't enter a phone number.\n";
		error.replaceChild(document.createTextNode(msg), error.childNodes[0]);
        return false;
        
    } else if (isNaN(parseInt(stripped))) {
        //alert("The phone number contains illegal characters.\n");
        var error = document.getElementById("error");
		var msg = "The phone number contains illegal characters.\n";
		error.replaceChild(document.createTextNode(msg), error.childNodes[0]);
        return false;
        
    } else if (!(stripped.length == 10)) {
        //alert("The phone number is the wrong length. Make sure you included an area code.\n");
        var error = document.getElementById("error");
		var msg = "The phone number is the wrong length. Make sure you included an area code.\n";
		error.replaceChild(document.createTextNode(msg), error.childNodes[0]);
        return false;
        
    }
    return true;
}


