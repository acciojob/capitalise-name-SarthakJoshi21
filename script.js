//your JS code here. If required.
const inputField=document.getElementById("fname");
inputField.addEventlisterner('blur',()=>{
	inputField.value = inputField.value.toUpperCase();
})