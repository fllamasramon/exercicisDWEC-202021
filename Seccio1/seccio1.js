/**
 * 2. Escribir un código que compruebe que el input introducido es un número.
 */
function esNumero() {
    input = document.getElementById("input1").value;
    if (isNaN(input)) {
        document.getElementById("results").innerHTML = "No es un numero"
    } else {
        document.getElementById("results").innerHTML = "Es un numero"
    }
}

/**
 * 3. Escribir un código que muestre solo la parte entera de un número decimal.
 */
function numeroEntero() {
    input = document.getElementById("input1").value;
    document.getElementById("results").innerHTML = Math.trunc(input);
    //La función Math.trun devuelve la parte integral de un número
}

/**
 * 4. Escribir un código que muestre solo la parte decimal de un número.
 */

function numeroDecimal() {

}

/**
 * 5. Escribir un código que divida por 19 el número introducido y muestre 3 decimales.
 */

function tresDecimales() {
    var input = document.getElementById("input1").value;
    input = input / 19;
    document.getElementById("results").innerHTML = input.toFixed(3);
}

/**
 * 6. Escribir un código que diga si un string esta vacio o no
 */

function stringVacio() {
    var input = document.getElementById("input1").value;
    if (input === "") {
        document.getElementById("results").innerHTML = "string vacio";
    } else {
        document.getElementById("results").innerHTML = "string no vacio";
    }
}

/**
 * 7. Invertir una string
 */

function invertirString() {
    var input = document.getElementById("input1").value;
    document.getElementById("results").innerHTML = input.split("").reverse().join("")
}

/**
 * 8. Contar las a de un string.
 */

function contarA() {
    var input = document.getElementById("input1").value;
    var contador = 0;
    for (var i = 0; i < input.lenght; i++) {
        if (input[i] == "a" || input[i] == "A") {
            contador++;
        }
    }
    document.getElementById("results").innerHTML = "Hay" + contador + "letras a."
    //no sé por qué no funciona.
}

/**
 * 9. Un código que extraiga todos los carácteres antes de la primera a
 */

function antesA() {
    var input = document.getElementById("input1").value;
    var posicionA = input.indexOf("a");
    document.getElementById("results").innerHTML = input.slice(0, posicionA);
    //slice extrae parte de una string
}

/**
 * 10. Un codigo que muestre la posición de la primera y última "a"
 */

/**
 * 11. Escribir un código que borre "la" de un string.
 */

function borrarLa() {
    var input = document.getElementById("input1").value;
    document.getElementById("results").innerHTML = input.replace(/la/gi, "");
}

/**
 * 12. Un código que sustituya "la" por "*" es un string
 */

function sustituirLa() {
    var input = document.getElementById("input1").value;
    document.getElementById("results").innerHTML = input.replace(/la/gi, "*");
}

/**
 * 13. Un código que cree un nuevo string en el cual se le añada al principio y al final la primera
 * letra del string original. "Hola" -> "hholah"
 */

function capicua() {
    var input = document.getElementById("input1").value;
    var inicio = input.charAt(0);
    input = inicio + input + inicio;
    document.getElementById("results").innerHTML = input;
    //charAt devuelve en un string un caracter de una cadena
}

/**
 * 14. Un código que elimine los espacios de una string.
 */

function borrarEspacios() {
    var input = document.getElementById("input1").value;
    document.getElementById("results").innerHTML = input.trim().split(" ").join("");
    //trim quita los espacios de ambos lados de una cadena
}

/**
 * 15. Convertir un string con espacios en un string con las palabras separadas por guiones.
 */
function ponerGuiones(){
    var input = document.getElementById("input1").value;
    document.getElementById("results").innerHTML = input.trim().split(" ").join("-");
}

/**
 * 16. Un codigo que cree un acónimo a partir de un String.
 */

 function acronimo(){
     var input = document.getElementById("input1").value;
     var acronimo = "";
     for (var i = 0; i < input.lenght; i++){
         acronimo += input[i].charAt(0);
     }
     document.getElementById("results").innerHTML = acronimo;
 }