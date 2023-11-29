function convertir() {
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var moneda = document.getElementById("moneda").value;

    var resultado;

    if (moneda === "euro") {
        resultado = cantidad * 1.10;
        mostrarAlerta(cantidad + " euros son " + resultado.toFixed(2) + " dólares.");
    } else {
        resultado = cantidad * 0.91;
        mostrarAlerta(cantidad + " dólares son " + resultado.toFixed(2) + " euros.");
    }
}

function mostrarAlerta(mensaje) {
    alert(mensaje);
}