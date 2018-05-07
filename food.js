function sports(){
	var list = document.getElementById("sportslist");
	var list2=document.getElementById("foodlist");
	var list3 = document.getElementById("outdoorlist");
	list3.style.display="none";
	list2.style.display="none";
	list.style.display="";

}

function outdoors(){
	var list = document.getElementById("outdoorlist");
	var list2=document.getElementById("foodlist");
	var list3 = document.getElementById("sportslist");

	list3.style.display="none";
	list2.style.display="none";
	list.style.display="";

}


function food(){
	var list = document.getElementById("foodlist");

	var list2=document.getElementById("sportslist");
	var list3 = document.getElementById("outdoorlist");
	list3.style.display="none";
	list2.style.display="none";
	list.style.display="";

}