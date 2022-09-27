//debugger;
let producto = "";
let precio = 0;
let cantidad = 0;
let suma = 0;
let sumaTotal = 0;
const SALIR = "esc";

function compra(precio, producto) {
  alert(
    "Usted eligió: " + producto + ". El valor de este producto es de $" + precio
  );
  cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
  suma = precio * cantidad;
  alert("El total de los productos seleccionados es de $" + suma);
  sumaTotal += suma;
}

while (producto != SALIR) {
  producto = prompt(
    `Escriba el nombre del producto que desea llevar. Tenemos disponible :
    *Limpiador facial 
    *Exfoliante 
    *Tonico 
    *Serum 
    *Crema Hidratante 
    *Protector Solar. 
  Para salir escriba 'ESC'`
  ).toLowerCase();

  switch (producto) {
    case SALIR:
      break;

    case "limpiador facial":
      compra(1240, "Limpiador Facial");
      break;

    case "exfoliante":
      compra(1120, "Exfoliante");
      break;

    case "tonico":
      compra(1450, "Tónico");
      break;

    case "serum":
      compra(1050, "Serum");
      break;

    case "crema hidratante":
      compra(1400, "Crema Hidratante");
      break;

    case "protector solar":
      compra(2500, "Protector Solar");
      break;

    default:
      alert("⛔ Lo siento, intenta de nuevo");
      break;
  }

  let result = confirm("¿Desea seguir comprando?");
  if (!result) {
    alert("La suma acumulada al momento es: $" + sumaTotal);
    alert("¡Gracias por su compra");
    break;
  }
}
