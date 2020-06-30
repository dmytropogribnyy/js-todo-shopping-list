let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Done"));
	li.appendChild(button);
	button.onclick = underlineParent;
	// CREATE AN ELEMENT
	var button = document.createElement("button");
	// APPEND TEXT TO BUTTON
	button.appendChild(document.createTextNode("Delete"));
	// APPEND BUTTON TO LIST
	li.appendChild(button);

	button.onclick = removeParent;
	//THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREATED.
}

function underlineParent(event) {
	event.target.parentNode.classList.toggle("done");
}

function removeParent(event) {
	event.target.parentNode.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	//event.which instead works as well
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
