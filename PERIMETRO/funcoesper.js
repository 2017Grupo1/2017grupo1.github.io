function fper() {
b = document.getElementById("base").value;
b=Number(b); 
a = document.getElementById("altura").value;
a=Number(a); 
h=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
perimetro=h+b+a
document.getElementById("dper").innerHTML = perimetro; 
}