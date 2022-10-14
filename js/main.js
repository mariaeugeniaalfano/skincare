// variables
let producto;
let precio;
let cantidadProductos;
let suma;
let sumaTotal = 0;
const SALIR = "esc";


//clase que pasa nombre y precio
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}


//array que carga los productos seleccionados
const ARRAY_PRODUCTOS = []; 


//funcion para pedir producto y calcular total
function compra(precio, producto) {
  alert(
    "Usted eligió: " + producto + ". El valor del producto es de $" + precio
  );
  cantidadProductos = parseInt(prompt("¿Cuantos desea comprar?"));
  suma = precio * cantidadProductos;
  alert("El total por " + cantidadProductos + " " + producto + " es de $" + suma);
  sumaTotal += suma;
}


//while con switch que carga productos seleccionados al array
while (producto != SALIR) {
  producto = prompt(
    "Escriba el nombre del producto que desea llevar. Tenemos disponible : \n*Limpiador facial \n*Exfoliante \n*Tonico \n*Serum \n*Crema Hidratante \n*Protector Solar. \nPara salir escriba ´ESC´"
  ).toLowerCase();

  switch (producto) {
    case SALIR:
      break;

    case "limpiador facial":
      let limpiadorFacial = new Producto(
        "limpiador facial",
        1240,
        cantidadProductos
      );
      compra(limpiadorFacial.precio, limpiadorFacial.nombre);
      ARRAY_PRODUCTOS.push(limpiadorFacial);
      break;

    case "exfoliante":
      let exfoliante = new Producto("exfoliante", 1120, cantidadProductos);
      compra(exfoliante.precio, exfoliante.nombre);
      ARRAY_PRODUCTOS.push(exfoliante);
      break;

    case "tonico":
      let tonico = new Producto("tonico", 1450, cantidadProductos);
      compra(tonico.precio, tonico.nombre);
      ARRAY_PRODUCTOS.push(tonico);
      break;

    case "serum":
      let serum = new Producto("serum", 1050, cantidadProductos);
      compra(serum.precio, serum.nombre);
      ARRAY_PRODUCTOS.push(serum);
      break;

    case "crema hidratante":
      let cremaHidratante = new Producto(
        "crema hidratante",
        1400,
        cantidadProductos
      );
      compra(cremaHidratante.precio, cremaHidratante.nombre);
      ARRAY_PRODUCTOS.push(cremaHidratante);
      break;

    case "protector solar":
      let protectorSolar = new Producto(
        "protector solar",
        2500,
        cantidadProductos
      );
      compra(protectorSolar.precio, protectorSolar.nombre);
      ARRAY_PRODUCTOS.push(protectorSolar);
      break;

    default:
      alert("⛔ Lo siento, intenta de nuevo");
      break;
  }


  //if que confirma si usuario quiere salir y devuelve array + cantidad a abonar
  if (producto != SALIR) {
    let result = confirm("¿Desea seguir comprando?");

    if (!result) {
      for (let i = 0; i <= ARRAY_PRODUCTOS.length; i++) {
        alert(
          "Producto seleccionado: " +
            ARRAY_PRODUCTOS[i].nombre.toUpperCase() +
            "." +
            "\n\n✅La suma TOTAL de la compra es de : $" +
            sumaTotal
        );
      }
    }
  }
}

