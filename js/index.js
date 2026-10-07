console.log("Hola mundo");

let nombre = "Beluzita";
let numero = 20;

console.log(nombre + numero);

const constante = 10;

console.log(nombre, numero, constante);

// constante = 1

const persona = {
  nombre: "Belen",
  localidad: "lomas",
  dni: 123456,
  suscripciones: ["netflix", "spotify"],
  direccion: { calle: "avenida siempre viva", numero: 123, codigoPostal: 1234 },
  mascotas: ["Dante", "Chiste"],
};

console.log(persona.suscripciones[1]);
console.log(`Calle: ${persona.direccion.calle}`);
console.log(`Numero: ${persona.direccion.numero}`);
console.log(`Codigo Postal: ${persona.direccion.codigoPostal}`);

/* -------------------------------------------------------------------------- */
/*                               OTROS EJEMPLOS                               */
/* -------------------------------------------------------------------------- */
// ===============================
// 1. VARIABLES Y REASIGNACIÓN
// ===============================
let precio = 1000;
console.log("Precio inicial:", precio);

precio = 1200;
console.log("Precio actualizado:", precio);

// ===============================
// 2. CONSTANTES (ERROR INTENCIONAL)
// ===============================
const IVA = 21;
// IVA = 10.5; // ❌ Descomentar para mostrar el error

// ===============================
// 3. TIPOS DE DATOS
// ===============================
//La variable "nombre" fue declarada en la clase en vivo, por eso aca no la declaro de nuevo, sino que reasigno valor
nombre = "Ana";
let edad = 25;
let esEstudiante = true;

console.log("Tipo de nombre:", typeof nombre);
console.log("Tipo de edad:", typeof edad);
console.log("Tipo de esEstudiante:", typeof esEstudiante);

// ===============================
// 4. OPERACIONES ARITMÉTICAS
// ===============================
let a = 10;
let b = 3;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);

// ===============================
// 5. CONCATENACIÓN
// ===============================
let nombreUsuario = "Juan";
let edadUsuario = 30;

//Si hay un string en la suma, concatena.
//Si solo son numeros, suma.
console.log("Hola, soy " + nombreUsuario + " y tengo " + edadUsuario + " años");

// ===============================
// 6. OBJETO
// ===============================
const producto = {
  nombre: "Mouse",
  precio: 5000,
  stock: 10,
};

console.log("Nombre del producto:", producto.nombre);
console.log("Precio del producto:", producto.precio);

// ===============================
// 7. ARRAY
// ===============================
const frutas = ["Manzana", "Banana", "Pera"];

console.log("Lista de frutas:", frutas);
console.log("Segunda fruta:", frutas[1]);
console.log("Última fruta:", frutas.at(-1));

// ===============================
// 8. ARRAY DE OBJETOS
// ===============================
const productos = [
  { nombre: "Mouse", precio: 5000 },
  { nombre: "Teclado", precio: 8000 },
];

console.log("Primer producto:", productos[0].nombre);
console.log("Precio del segundo producto:", productos[1].precio);
