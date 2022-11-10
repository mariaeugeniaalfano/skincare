//Clase parametros productos
class Producto {
  constructor(nombre, descripcion, precio, cantidad, imagen) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imagen = imagen;
  }
}

//Informacion de productos
let productos = [
  new Producto(
    "Limpiador Facial",
    "Loción Limpiadora Cetaphil Para Piel Grasa X 237 Ml.",
    1240,
    0,
    "../img/limpiador.png"
  ),
  new Producto("Exfoliante", "Energizing Exfoliante Deep Clean 100 Gr.", 1120, 0, "../img/exfoliante.png"),
  new Producto("Tonico", "Leche Y Tónico Micelar Nivea Rose Care 2 En 1 X 200 Ml.", 1450, 0, "../img/tonico.png"),
  new Producto("Serum", "Acf By Dadatina Serum Humectante Vol 1 Balance Refill X 30ml Tipo De Piel Todo Tipo De Piel.", 1050, 0, "../img/serum.png"),
  new Producto(
    "Crema Hidratante",
    "Gel Neutrogena Hydro Boost water gel día/noche para piel seca de 1.7oz.",
    1400,
    0,
    "../img/crema-hidratante.png"
  ),
  new Producto(
    "Protector Solar",
    "Protector solar Eucerin Sensitive Protect FPS 50 Sun en crema de 50 mL.",
    2500,
    0,
    "../img/protector-solar.png"
  ),
];

//array que carga los productos seleccionados
let ARRAY_PRODUCTOS = [];

let contenedorProductos = document.getElementById("contenedor-productos");

//Visualización de productos en DOM
for (let index = 0; index < productos.length; index++) {
  contenedorProductos.innerHTML += `
  <div class="card col m-1" style="width: 18rem">
  <img src=${productos[index].imagen} loading="lazy" class="card-img-top" 
    alt="${productos[index].nombre} />
  <div class="card-body">
    <h5 class="card-title">${productos[index].nombre}</h5>
    <p class="card-text">${productos[index].descripcion}</p>
    <p class="importe">${productos[index].precio}</p>
    <p>Seleccione cantidad</p>
    <form action="">
      <input type="number" value="0" min="0"name=${productos[index].nombre} id=product-cant-${index} class="input_boton" />
      <button id="product-button-${index}" class="btn btn-light" type="reset">
        Agregar al carrito
      </button>
    </form>
  </div>
  </div>`;
}

//Agregar al carrito
for (let index = 0; index < productos.length; index++) {
  document
    .getElementById(`product-button-${index}`)
    .addEventListener("click", function () {
      agregarACarrito(index);
    });
}

function agregarACarrito(id) {
  let cantidad = document.getElementById(`product-cant-${id}`).value;
  if (cantidad > 0) {
    if (ARRAY_PRODUCTOS.some((x) => x.nombre == productos[id].nombre)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya tiene ese producto en el carrito, no puede volver a agregarlo.",
      });
      return;
    }
    productos[id].cantidad += parseInt(cantidad);

    ARRAY_PRODUCTOS.push(productos[id]);
    localStorage.setItem("carrito", JSON.stringify(ARRAY_PRODUCTOS));
    mostarMensajeProductoAgregado(productos[id].nombre);
  }
}

//Botones "comprar, ver, borrar carrito"
let vaciarChanguito = document.getElementById("id_vaciarChanguito");
let verChanguito = document.getElementById("id_verChanguito");
let comprarChanguito = document.getElementById("id_comprar");

vaciarChanguito.addEventListener("click", vaciarchango);
verChanguito.addEventListener("click", verProductosEnChanguito);
comprarChanguito.addEventListener("click", comprarProductos);


//STORAGE
let dataStorage = JSON.parse(localStorage.getItem("carrito"));
if (dataStorage !== null) {
  verProductosEnChanguito();
}

//Sweet Alert "agregado al carrito"
function mostarMensajeProductoAgregado(nombre) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Se ha agregado " + nombre + " al carrito",
    showConfirmButton: false,
    timer: 2000,
  });
}

//Vaciar changuito
function vaciarchango() {
  if (dataStorage !== null) {
    localStorage.removeItem("carrito");
    ARRAY_PRODUCTOS = [];
    Swal.fire({
      icon: "error",
      title: "Se ha vaciado el carrito",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "No hay elementos en su carrito",
    });
  }
}

//Ver changuito
function verProductosEnChanguito() {
  dataStorage = JSON.parse(localStorage.getItem("carrito"));

  if (dataStorage !== null) {
    let sumatoriaTotalProductos = 0;
    let mensajeGenerado = "Tu carrito tiene:\n";

    for (let i = 0; i < dataStorage.length; i++) {
      mensajeGenerado +=
        "\n" +
        dataStorage[i].cantidad +
        " " +
        dataStorage[i].nombre +
        ". Precio por unidad: $" +
        dataStorage[i].precio +
        "\n";

      sumatoriaTotalProductos +=
        parseInt(dataStorage[i].cantidad) * dataStorage[i].precio;
    }
    mensajeGenerado += "\n TOTAL: $" + sumatoriaTotalProductos;

    Swal.fire({
      title: mensajeGenerado,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    Swal.fire({
      title: "No hay productos en el changuito",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
}

//Comprar

function comprarProductos() {
  dataStorage = JSON.parse(localStorage.getItem("carrito"));

  if (dataStorage === null) {
    Swal.fire({
      title: "Primero debe seleccionar los productos a comprar",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    return;
  }

  if (dataStorage !== null) {
    let sumatoriaTotalProductos = 0;
    let mensajeGenerado = "Comprar los siguientes productos:\n";

    for (let i = 0; i < dataStorage.length; i++) {
      mensajeGenerado +=
        "\n" +
        dataStorage[i].cantidad +
        " " +
        dataStorage[i].nombre +
        ". Precio por unidad: $" +
        dataStorage[i].precio +
        "\n";
      sumatoriaTotalProductos +=
        parseInt(dataStorage[i].cantidad) * dataStorage[i].precio;
    }
    mensajeGenerado += "\n TOTAL: $" + sumatoriaTotalProductos;

    Swal.fire({
      title: mensajeGenerado,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Comprar",
      denyButtonText: `Seguir comprando`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("¡Gracias por su compra!");
        localStorage.removeItem("carrito");
        ARRAY_PRODUCTOS = [];
      } else if (result.isDenied) {
        Swal.fire("¡A seguir comprando!");
      }
    });
  }
}
