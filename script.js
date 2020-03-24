var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li =document.getElementsByTagName('li');
var deleteButton = document.getElementsByClassName("deleteBtn");

for(var i =0; i< deleteButton.length; i++){
	deleteButton[i].addEventListener('click',removeParent);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var delBtn =document.createElement("Button");
	delBtn.innerHTML ='Delete Item';
	delBtn.onclick=removeParent;
	
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(delBtn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//get the target element on click
function getTarget(e){
	e = e || window.event;
	return e.target ||e.srcElement;
} 
//toggle the target element by adding .done
function toggleItem(e){
	var target= getTarget(e);
	target.classList.toggle('done');
}

//Delete buttons at the end of every newly created list item
function removeParent(e){
	e.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleItem);
