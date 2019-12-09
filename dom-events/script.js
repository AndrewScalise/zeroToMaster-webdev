var enterButton = document.getElementById("enter");
var removeButton = document.getElementById("remove");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var shoppingList = document.getElementById("shoppingList");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
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

function removeListItemAfterClick(event) {
    list = document.querySelectorAll("li");
    if(list.length > 0) {
        console.log(shoppingList);
        shoppingList.removeChild(list[list.length - 1]);
        console.log(list.length);
    }
}

enterButton.addEventListener("click", addListAfterClick);
removeButton.addEventListener("click", removeListItemAfterClick);
input.addEventListener("keypress", addListAfterKeypress);