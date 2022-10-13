let producto;
let precio;
let cantidad;
let suma;
let sumaTotal = 0;
const SALIR = "esc";

function compra(precio, producto) {
    alert("Usted eligió:" + producto + ". Su valor es de $" + precio);
    cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
    suma = precio * cantidad;
    alert("el total es $" + suma);
    sumaTotal += suma;
}

while (producto != SALIR) {
    producto = prompt(
        'Escriba el nombre del producto que desea llevar. Tenemos disponible : Limpiador facial, Exfoliante, Tonico, Serum, Crema Hidratante y Protector Solar. Para salir escriba ´ESC´'
    ).toLowerCase();

    switch (producto) {
        case SALIR:
            break;

        case "limpiador facial":
            compra(1240, 'limpiador facial');
            break;

        case "exfoliante":
            compra(1120, 'exfoliante');
            break;

        case "tonico":
            compra(1450, 'tonico');
            break;

        case "serum":
            compra(1050, 'serum');
            break;

        case "crema hidratante":
            compra(1400, 'crema hidratante');
            break;

        case "protector solar":
            compra(2500, 'protector solar');
            break;

        default:
            alert("⛔ Lo siento, intenta de nuevo");
            break;
    }

    if (producto !== SALIR) {
        let result = confirm("¿Desea seguir comprando?");

        if (!result) {

            alert("la suma acumulada al momento es: " + sumaTotal);
            alert("¡Gracias por su compra!")
            break;
        }
    }

}