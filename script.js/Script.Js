function contarVocales(cadena) {
    let vocales = "áéíóúaeiouAEIOU";
    let contador = 0;

    for (var char of cadena) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    return contador;
}

let entradaUsuario = prompt("Ingresa un texto:");
let resultado = contarVocales(entradaUsuario);
alert("Número de vocales en el texto: " + resultado);