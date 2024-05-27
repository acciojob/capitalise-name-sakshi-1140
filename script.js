//your JS code here. If required.
let input=document.getElementById("fname")
input.addEventListener("blur",toUpperCase)
function toUpperCase{
  let str=input.value
  input.value=str.toUpperCase();
}