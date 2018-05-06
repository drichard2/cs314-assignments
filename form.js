function submit(){
	console.log("test");

	var firstname = document.getElementById("firstname").value;

	if (firstname.length ==0){
		alert("Firstname not valid!");
		return;
	}
	
	var lastname = document.getElementById("lastname").value;
	if (lastname.length ==0){
		alert("Lastname not valid!");
		return;
		
	}
	var phone = document.getElementById("number").value;

	
	if (!validatePhone(phone)){
		return;
	}
	

	var email = document.getElementById("email").value;


	if (!checkEmail(email)){
		alert("email not valid");
		return;
	}

	
	var message = document.getElementById("message").value;

	if (message.length ==0){
		alert("Message not valid!");
		return;
	}


	var item = document.getElementById('newtext');
	console.log(item);
    item.appendChild(document.createTextNode("From: "+firstname+" "+lastname));



    var semail = document.getElementById('semail');
    var snumber = document.getElementById('snumber');


    semail.appendChild(document.createTextNode("Email: "+email));
	snumber.appendChild(document.createTextNode("Phone: "+phone));

    var content = document.getElementById('content');
    content.appendChild(document.createTextNode(message));

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

    
 	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
}

function validatePhone(fld) {
 
    var stripped = fld.replace(/[\(\)\.\-\ ]/g, '');     

   if (fld == "") {
        alert("You didn't enter a phone number.\n");
        return false;
        
    } else if (isNaN(parseInt(stripped))) {
        alert("The phone number contains illegal characters.\n");
        return false;
        
    } else if (!(stripped.length == 10)) {
        alert("The phone number is the wrong length. Make sure you included an area code.\n");
        return false;
        
    }
    return true;
}


