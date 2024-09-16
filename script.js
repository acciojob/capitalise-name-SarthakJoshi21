//your JS code here. If required.
const inputField=document.getElementById("fname");
inputField.addEventListerner('blur',()=>{
	inputField.value = inputField.value.toUpperCase();
})