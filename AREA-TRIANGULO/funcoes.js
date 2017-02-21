function farea() {
b = document.getElementById("base").value;
b=Number(b); 
a = document.getElementById("altura").value;
a=Number(a); 
area=b*a/2 
document.getElementById("darea").innerHTML = area; 
}