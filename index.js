

function buttonClicked1(){

	document.getElementById("one").scrollIntoView();
	console.log("button 1 clicked");
}

function buttonClicked2(){

	document.getElementById("two").scrollIntoView();
	console.log("button 2 clicked");
}

function buttonClicked3(){

	document.getElementById("three").scrollIntoView();
	console.log("button 3 clicked");
}

function buttonClicked4(){

	document.getElementById("four").scrollIntoView();
	console.log("button 4 clicked");
}

function buttonClicked5(){

	document.getElementById("five").scrollIntoView();
	console.log("button 5  clicked");
}

function backgroundColorBlue(){
	document.getElementById("one").style.backgroundColor='blue';
}

function backgroundColorGreen(){
	document.getElementById("one").style.backgroundColor='green';
}

function toggleColor(){


	var elem = document.getElementById('button');
	var text= elem.textContent || elem.innerText;

	if(text=='Click for pink!'){
		document.getElementById("two").style.backgroundColor='pink';
		document.getElementById('button').innerText='Click for orange!';
		console.log("dfhdjksf");
	}

	if(text=='Click for orange!'){
		document.getElementById("two").style.backgroundColor='orange';
		document.getElementById('button').innerText='Click for pink!';
		console.log("dfhdjksf");
	}

}

function addToList (){
	var text = document.getElementById("input").value;
	console.log(text);

	var list = document.getElementById("list");
	var entry = document.createElement('li');
	entry.appendChild(document.createTextNode(text));
	list.appendChild(entry);

}


function removeItem1(){
	var item = document.getElementById('bob');
	item.parentNode.removeChild(item);
}
function removeItem2(){
	var item = document.getElementById('tim');
	item.parentNode.removeChild(item);
	
}
function removeItem3(){
	var item = document.getElementById('jack');
	item.parentNode.removeChild(item);
	
}
function removeItem4(){
	var item = document.getElementById('sam');
	item.parentNode.removeChild(item);
	
}



function highlightItem1(){

	document.getElementById("bob1").style.backgroundColor='blue';
	document.getElementById("tim1").style.backgroundColor='lightgrey';
	document.getElementById("jack1").style.backgroundColor='lightgrey';
	document.getElementById("sam1").style.backgroundColor='lightgrey';
}

function highlightItem2(){

	document.getElementById("bob1").style.backgroundColor='lightgrey';
	document.getElementById("tim1").style.backgroundColor='blue';
	document.getElementById("jack1").style.backgroundColor='lightgrey';
	document.getElementById("sam1").style.backgroundColor='lightgrey';
}

function highlightItem3(){

	document.getElementById("bob1").style.backgroundColor='lightgrey';
	document.getElementById("tim1").style.backgroundColor='lightgrey';
	document.getElementById("jack1").style.backgroundColor='blue';
	document.getElementById("sam1").style.backgroundColor='lightgrey';
}

function highlightItem4(){

	document.getElementById("bob1").style.backgroundColor='lightgrey';
	document.getElementById("tim1").style.backgroundColor='lightgrey';
	document.getElementById("jack1").style.backgroundColor='lightgrey';
	document.getElementById("sam1").style.backgroundColor='blue';
}
