//variables HTML
let limpiador = document.getElementById("input_limpiador");
let exfoliante = document.getElementById("input_exfoliante");
let tonico = document.getElementById("input_tonico");
let serum = document.getElementById("input_serum");
let cremHidra = document.getElementById("input_cremahidratante");
let protectSolar = document.getElementById("input_protectorsolar");

//botones
let botonLimpiador = document.getElementById("id_limpiador");
botonLimpiador.addEventListener("click", agregarChanguito);

let botonExfoliante = document.getElementById("id_exfoliante");
botonExfoliante.addEventListener("click", agregarChanguito);

let botonTonico = document.getElementById("id_tonico");
botonTonico.addEventListener("clik", agregarChanguito);

let botonSerum = document.getElementById("id_serum");
botonSerum.addEventListener("clik", agregarChanguito);

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

// variables
let producto;
let precio;
let cantidadProductos;
let suma;
let sumaTotal = 0;

//array que carga los productos seleccionados
const ARRAY_PRODUCTOS = [];

//------------------------------------------------------//

//clase que pasa nombre y precio
class Producto {
  constructor(name, value, precioProducto) {
    this.name = name;
    this.value = value;
    this.precioProducto = precioProducto;
  }
  calcularPrecio() {
    return this.value * this.precioProducto;
  }
}
console.log(ARRAY_PRODUCTOS);
console.log(sumaTotal);

// funcion crear producto
const crearProducto = (name, value, precioProducto) => {
  producto = new Producto(name, value, precioProducto);
  sumaTotal += producto.calcularPrecio();
  ARRAY_PRODUCTOS.push(producto);
  alert(ARRAY_PRODUCTOS);
  alert(sumaTotal);
};

//funcion agregar changuito
function agregarChanguito() {
  producto = "";
  while (true) {
    if (limpiador.value > 0) {
      crearProducto(limpiador.name, limpiador.value, precioLimpiador);
    }
    if (exfoliante.value > 0) {
      crearProducto(exfoliante.name, exfoliante.value, precioExfoliante);
    }
    if (tonico.value > 0) {
      crearProducto(tonico.name, tonico.value, precioTonico);
    }
    if (serum.value > 0) {
      crearProducto(serum.name, serum.value, precioSerum);
    }
    if (cremHidra.value > 0) {
      crearProducto(cremHidra.name, cremHidra.value, precioCremaHidra);
    }
    if (protectSolar.value > 0) {
      crearProducto(protectSolar.name, protectSolar.value, precioProtectSol);
    }
    break;
  }
}
