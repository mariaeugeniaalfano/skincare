//variables HTML DOM
let limpiador = document.getElementById("input_limpiador");
let exfoliante = document.getElementById("input_exfoliante");
let tonico = document.getElementById("input_tonico");
let serum = document.getElementById("input_serum");
let cremHidra = document.getElementById("input_cremahidratante");
let protectSolar = document.getElementById("input_protectorsolar");
let vaciarChanguito = document.getElementById("id_vaciarChanguito");
let verChanguito = document.getElementById("id_verChanguito");
let comprarChanguito = document.getElementById("id_comprar")

vaciarChanguito.addEventListener("click", vaciarchango);
verChanguito.addEventListener("click", verProductosEnChanguito);
comprarChanguito.addEventListener("click", comprarLosProductos);

//botones DOM
let botonLimpiador = document.getElementById("id_limpiador");
botonLimpiador.addEventListener("click", agregarChanguito);

let botonExfoliante = document.getElementById("id_exfoliante");
botonExfoliante.addEventListener("click", agregarChanguito);

let botonTonico = document.getElementById("id_tonico");
botonTonico.addEventListener("click", agregarChanguito);

let botonSerum = document.getElementById("id_serum");
botonSerum.addEventListener("click", agregarChanguito);

let botonCremaHidra = document.getElementById("id_cremahidratante");
botonCremaHidra.addEventListener("click", agregarChanguito);

let botonProtectorSolar = document.getElementById("id_protectorsolar");
botonProtectorSolar.addEventListener("click", agregarChanguito);

//variables precios productos
let precioLimpiador = 1240;
let precioExfoliante = 1120;
let precioTonico = 1450;
let precioSerum = 1050;
let precioCremaHidra = 1400;
let precioProtectSol = 2500;

//array que carga los productos seleccionados
let ARRAY_PRODUCTOS = [];

//------------------------------------------------------//

//STORAGE
let dataStorage = JSON.parse(localStorage.getItem("carrito"));
if (dataStorage !== null) {
  verProductosEnChanguito();
}

//clase que pasa nombre y precio de cada producto
class Producto {
  constructor(name, value, precioProducto) {
    this.name = name;
    this.value = value;
    this.precioProducto = precioProducto;
  }
}

// funcion crear producto con push al array
const crearProducto = (name, value, precioProducto) => {
  let producto = new Producto(name, value, precioProducto);

  if (ARRAY_PRODUCTOS.some((x) => x.name == producto.name)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ya tiene ese producto en el carrito, no puede volver a agregarlo.",
    });
    return;
  }

  ARRAY_PRODUCTOS.push(producto);
  localStorage.setItem("carrito", JSON.stringify(ARRAY_PRODUCTOS));
  mostarMensajeProductoAgregado(producto.name);
};

//funcion agregar changuito
function agregarChanguito() {
  if (limpiador.value > 0) {
    crearProducto(limpiador.name, limpiador.value, precioLimpiador);
  } else if (exfoliante.value > 0) {
    crearProducto(exfoliante.name, exfoliante.value, precioExfoliante);
  } else if (tonico.value > 0) {
    crearProducto(tonico.name, tonico.value, precioTonico);
  } else if (serum.value > 0) {
    crearProducto(serum.name, serum.value, precioSerum);
  } else if (cremHidra.value > 0) {
    crearProducto(cremHidra.name, cremHidra.value, precioCremaHidra);
  } else if (protectSolar.value > 0) {
    crearProducto(protectSolar.name, protectSolar.value, precioProtectSol);
  }
}

//Sweet Alert "agregado al carrito"
function mostarMensajeProductoAgregado(nombreProducto) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Se ha agregado " + nombreProducto + " al carrito",
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
      text: "0 productos en el carrito",
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


      mensajeGenerado += "\n" + dataStorage[i].value + " " + dataStorage[i].name + ". Precio por unidad: $" + dataStorage[i].precioProducto + "\n"

      sumatoriaTotalProductos +=
        parseInt(dataStorage[i].value) * dataStorage[i].precioProducto;
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



function comprarLosProductos() {
  dataStorage = JSON.parse(localStorage.getItem("carrito"));
  
  if (dataStorage !== null) {
    let sumatoriaTotalProductos = 0;
    let mensajeGenerado = "Comprar los siguientes productos:\n";

    for (let i = 0; i < dataStorage.length; i++) {


      mensajeGenerado += "\n" + dataStorage[i].value + " " + dataStorage[i].name + ". Precio por unidad: $" + dataStorage[i].precioProducto + "\n"

      sumatoriaTotalProductos +=
        parseInt(dataStorage[i].value) * dataStorage[i].precioProducto;
    }
    mensajeGenerado += "\n TOTAL: $" + sumatoriaTotalProductos;


  Swal.fire({
    title:  mensajeGenerado,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Comprar',
    denyButtonText: `Seguir comprando`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Gracias por su compra');
    } else if (result.isDenied) {
      Swal.fire("¡A seguir comprando!")
    }
  })}
}