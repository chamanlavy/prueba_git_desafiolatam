/*NOTAS HTML*/

var html1 = document.getElementById("html1");
var html2 = document.getElementById("html2");
var html3 = document.getElementById("html3");
var promedio_html = document.getElementById("promedioHtml");


var nota_html1 = +prompt("Ingrese nota 1 de html:");
var nota_html2 = +prompt("ingrese nota 2 de html:");
var nota_html3 = +prompt("Ingrese nota 3 de html:");

 

/*---------------*/

html1.innerHTML = nota_html1;
html2.innerHTML = nota_html2;
html3.innerHTML = nota_html3;
promedio_html.innerHTML =  ((nota_html1+nota_html2+nota_html3)/3).toFixed(2);



/*NOTAS CSS*/

var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");


var js1 = document.getElementById("js1");
var js2 = document.getElementById("js2");
var js3 = document.getElementById("js3");