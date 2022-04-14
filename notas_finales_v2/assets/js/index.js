/* Variables para Ramo HTML */
var html1 = document.getElementById("HTML1");
var html2 = document.getElementById("HTML2");
var html3 = document.getElementById("HTML3");
var html_promedio = document.getElementById("HTML_promedio");

var nota1_html = +prompt("Ingrese Nota 1 de Ramo HTML");
var nota2_html = +prompt("Ingrese Nota 2 de Ramo HTML");
var nota3_html = +prompt("Ingrese Nota 3 de Ramo HTML");

html1.innerHTML = nota1_html;
html2.innerHTML = nota2_html;
html3.innerHTML = nota3_html;
html_promedio.innerHTML = ((nota1_html + nota2_html + nota3_html)/ 3).toFixed(2);


/* Variables para Ramo CSS */
var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");
var css_promedio = document.getElementById("css_promedio");

var nota1_css = +prompt("Ingrese Nota 1 de Ramo CSS");
var nota2_css = +prompt("Ingrese Nota 2 de Ramo CSS");
var nota3_css = +prompt("Ingrese Nota 3 de Ramo CSS");

css1.innerCSS = nota1_css;
css2.innerCSS = nota2_css;
css3.innerCSS = nota3_css;
css_promedio.innerCSS = ((nota1_css + nota2_css + nota3_css)/ 3).toFixed(2); // esto es para obtener el promedio

/* Variables para Ramo JS */
var js1 = document.getElementById("js1");
var js2 = document.getElementById("js2");
var js3 = document.getElementById("js3");
var js_promedio = document.getElementById("js_promedio");

var nota1_js = +prompt("Ingrese Nota 1 de Ramo Javascript");
var nota2_js = +prompt("Ingrese Nota 2 de Ramo Javascript");
var nota3_js = +prompt("Ingrese Nota 3 de Ramo Javascript");

js1.innerJS = nota1_js;
js2.innerJS = nota2_js;
js3.innerJS = nota3_js;
js_promedio.innerJS = ((nota1_js + nota2_js + nota3_js)/ 3).toFixed(2);
