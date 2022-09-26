let producto = prompt("Escriba el nombre del producto que desea llevar. Tenemos disponible : Limpiador facial, Exfoliante, Tonico, Serum, Crema Hidratante y Protector Solar. ");
let precio;
let cantidad;
const SUMA = precio * cantidad;

debugger
while (producto != "ESC") {
    switch (producto) {
        case "Limpiador facial":
            precio = 1240;
            alert("Usted eligió: Limpiador Facial. Su valor es de $" + precio);
            cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
            alert("el total es $" + (precio * cantidad));
            confirm ("¿Desea seguir comprando?");
            break;

        case "Exfoliante":
            precio = 1120;
            alert("Usted eligió: Exfoliante. Su valor es de $" + precio)
            cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
            alert("el total es $" + (precio * cantidad));            
            confirm ("¿Desea seguir comprando?");
            break;

        case "Tonico":
            precio = 1450;
            alert("Usted eligió: Tonico. Su valor es de $" + precio)
            cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
            alert("el total es $" + (precio * cantidad));            
            confirm ("¿Desea seguir comprando?");
            break;

        case "Serum":
            precio = 1050;
            alert("Usted eligió: Serum . Su valor es de $" + precio)
            cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
            alert("el total es $" + (precio * cantidad));
            confirm ("¿Desea seguir comprando?");
            break;

        case "Crema Hidratante":
            precio = 1400;
            alert("Usted eligió: Crema Hidratante . Su valor es de $" + precio)
            cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
            alert("el total es $" + (precio * cantidad));
            confirm ("¿Desea seguir comprando?");
            break;

        case "Protector Solar":
            precio = 2500;
            alert("Usted eligió: Protector Solar . Su valor es de $" + precio)
            cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
            alert("el total es $" + (precio * cantidad));
            confirm ("¿Desea seguir comprando?");
            break;

        default:
            alert("⛔ Lo siento, intenta de nuevo");
            break;
    }

}