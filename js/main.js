debugger;
let producto;
let precio;
let cantidad;
let suma;
const SALIR = "esc";

while (producto != SALIR) {
  producto = prompt(
    "Escriba el nombre del producto que desea llevar. Tenemos disponible : Limpiador facial, Exfoliante, Tonico, Serum, Crema Hidratante y Protector Solar. Para salir escriba ´ESC´"
  ).toLowerCase();

  switch (producto) {
    case SALIR:
      break;

    case "limpiador facial":
      precio = 1240;
      alert("Usted eligió: Limpiador Facial. Su valor es de $" + precio);
      cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
      suma = precio * cantidad;
      alert("el total es $" + suma);
      break;

    case "exfoliante":
      precio = 1120;
      alert("Usted eligió: Exfoliante. Su valor es de $" + precio);
      cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
      suma = precio * cantidad;
      alert("el total es $" + suma);
      break;

    case "tonico":
      precio = 1450;
      alert("Usted eligió: Tonico. Su valor es de $" + precio);
      cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
      suma = precio * cantidad;
      alert("el total es $" + suma);
      break;

    case "serum":
      precio = 1050;
      alert("Usted eligió: Serum . Su valor es de $" + precio);
      cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
      suma = precio * cantidad;
      alert("el total es $" + suma);
      break;

    case "crema hidratante":
      precio = 1400;
      alert("Usted eligió: Crema Hidratante . Su valor es de $" + precio);
      cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
      suma = precio * cantidad;
      alert("el total es $" + suma);
      break;

    case "protector solar":
      precio = 2500;
      alert("Usted eligió: Protector Solar . Su valor es de $" + precio);
      cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
      suma = precio * cantidad;
      alert("el total es $" + suma);
      break;

    default:
      alert("⛔ Lo siento, intenta de nuevo");
      break;
  }

  let result = confirm("¿Desea seguir comprando?");
  if (!result) {
    break;
  }
}
