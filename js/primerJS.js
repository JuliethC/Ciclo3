//alert("primer javascript pero en el .js");

var nombre="Pepito Pérez";
var edad=15;
var peso=74.5;
var masculino=true;
var materias;

/*var numero1 = prompt("Ingresar numero 1");
var numero2 = prompt("Ingresar numero 2");
var resultado = parseInt(numero1) + parseInt(numero2);
alert("El resultado de la suma es "+resultado); */
//document.write("<p class='fs-2'>El resultado de la suma es "+resultado+"</p>");
document.write("<center>")

document.write("<h1>Ejemplo Arreglos</h1>");
document.write("<br />");

var materias=["Inglés", "Francés", "Matematicas", 940914, false]; 
document.write(materias.join(" : "))
document.write("<br />");

document.write(materias.join("<br />"));
document.write("<br />");

document.write(materias.sort());
document.write("<br />");

materias[materias.length]= "Fisica";
document.write("<br />");

document.write("La materia en la posicion 6 es "+materias[5]);
document.write("<br />");

document.write("Pop borra del arreglo la ultima");
materias.pop();
document.write("<br />");

document.write("La materia en la posicion 6 es "+materias[5]);
document.write("<br />");document.write("<br />");document.write("<br />");document.write("<br />");

document.write("<h1>Ciclo</h1>");
for(i=1; i<=10; i+=3)
{
    document.write("<br /> La i va en el valor "+i);
}
document.write("<br />");
document.write("<br />");

document.write("<h1>while </h1>");
var j=4;
while(j<=10)
{
    document.write("<br /> La j va en el valor "+j);
    j++;
}
document.write("<br />");
document.write("<br />");

document.write("<h1>do - while </h1>");
var k=4;
do{
    document.write("<br /> la k va en el valor "+k);
    k++;

}while(k<10);
document.write("<br />");
document.write("<br />");
document.write("<br />");
document.write("<br />");

function sumar(){
    alert("Ingreso a función");
    var numero1Formulario = document.getElementById("numero1").value;
    var numero2Formulario = document.getElementById("numero2").value;
    var sumatoria = parseInt (numero1Formulario) + parseInt (numero2Formulario);
    alert("Sumatoria: "+sumatoria)
}

function sumar1 (numero1, numero2){
    var sumatoria = numero1 + numero2;
    return sumatoria
}

var sumatoriaGlobal = sumar1(54, 21);
/*alert("Sumatoria global: "+sumatoriaGlobal);*/

var nombre="Julieth Castañeda";
/*alert("Nombre originalmente: "+nombre);
alert("Nombre en mayúsculas: "+nombre.toUpperCase());
alert("Nombre en minúsculas: "+nombre.toLowerCase());
alert("Letra en posicion 8: "+nombre.charAt(8));
alert("Letra i que posición esta: "+nombre.indexOf("i"));
alert("El espacio en que posición esta: "+nombre.indexOf(" "));
var espacioNombre = nombre.indexOf(" ");
alert("Espacio esta en posición: "+nombre.indexOf(" "));
alert("Espacio nombre: "+espacioNombre);
alert("Substring: "+nombre.substring(0,7));
alert("Apellido: "+nombre.substring(espacioNombre));
alert("Nombre "+nombre.substring(0, espacioNombre));*/

var elementosTipoParrafo = document.getElementsByTagName("p");
alert("mostrar etiqueta 0 "+elementosTipoParrafo[7].innerHTML);

var parrafo1 = document.getElementById("parrafoPruebas1");
parrafo1.innerHTML ="Cambiar párrafo";

//funcion global
function operacionesMatematicas(){
    sumar2();
    resta();
    multiplicacion();
    var boton_sumar = document.getElementById("boton_sumar");
    boton_sumar.setAttribute("class", "btn btn-success");
    //funcion locales
    function sumar2(){
        var numero1Formulario = document.getElementById("numero1").value;
        var numero2Formulario = document.getElementById("numero2").value;
        var sumatoria = parseInt (numero1Formulario) + parseInt (numero2Formulario);
        alert("Suma es igual a: "+sumatoria)
    }

    function resta(){
        var numero1Formulario = document.getElementById("numero1").value;
        var numero2Formulario = document.getElementById("numero2").value;
        var sumatoria = parseInt (numero1Formulario) - parseInt (numero2Formulario);
        alert("Resta es igual a: "+sumatoria)
    }

    function multiplicacion(){
        var numero1Formulario = document.getElementById("numero1").value;
        var numero2Formulario = document.getElementById("numero2").value;
        var sumatoria = parseInt (numero1Formulario) * parseInt (numero2Formulario);
        alert("Multiplicación es igual a: "+sumatoria)
    }
}

var etiquetaNueva = document.createElement("h1");
var contenidoTituloNuevo = document.createTextNode("Título dinamico");
etiquetaNueva.appendChild(contenidoTituloNuevo);
document.getElementById("Caja dinamica").appendChild(etiquetaNueva);