

// let nombre = prompt ( "Ingrese Nombre")
// let email = prompt ("Ingrese Email")

// console.log(nombre,email)

// nombre = nombre.trim()

// //validar nombre
// if (nombre == "" || nombre.length < 3) {
//     console.log("nombre no valido")
// }

// // vañidar email


// if (email.includes("@") && (email.endsWith(".com") || email.endsWith(".co"))) {
//     console.log("Email válido");

// }else {
//     console.log("email invalido")
// }
// nombre = nombre.toUpperCase()

//Parte 2 tipo de cliente
const compra = Number(prompt("Ingrese el valor de la compra"));
 let tipoCliente = prompt ("Ingrese tipo de cliente ")

 let descuento;
 let envio;

switch (tipoCliente){
    
case ("premium") :
    descuento = 20

    if (compra > 500000) {
    descuento = 25
}
break;

case ("estudiante"):
    descuento = 10
    break;

 case ("normal") :
    descuento = 0
    break;

    default:
        console.log("Tipo de cliente no valido")
        descuento = 0;
}

 if (tipoCliente === "estudiante" || compra > 1000000 ){
   envio = 0;
 }else{
    envio = 15000;
 }
 
 //Parte 3 Catalogo (arreglos)
const catalogo = [
    { nombre: "Teclado", precio: 120000 },
    { nombre: "Mouse", precio: 80000 },
    { nombre: "Monitor", precio: 450000 },
    { nombre: "USB 32GB", precio: 35000 },
    { nombre: "Portátil", precio: 2500000 },
];

const precioConIva = ( precio ) =>  precio * 1.19;

const productos = Number (prompt ("Cuantos productos desea comprar ?"))


let carrito = [];

for ( p = 0; p < productos; p++){

let lista = prompt ("Ingrese el nombre del producto");

// catalogo.find(producto => producto.nombre=== lista)

ProEncontrado = catalogo.find(producto => producto.nombre === lista);

while (ProEncontrado === undefined){
lista = prompt ("Ingrese un producto valido")
   
ProEncontrado = catalogo.find(producto => producto.nombre === lista)
}

carrito.push(ProEncontrado);
}

// console.log("carrito :", carrito)


//4 mostrar productos cuyo precio finbal supere los 100k
const resultado = carrito.filter( producto => precioConIva(producto.precio) > 100000);
console.log(resultado)


// 5 generar nuevo arreglo

const detalles = resultado.map (producto => {
 return `${producto.nombre} — $${precioConIva(producto.precio)}`;
});

console.log(detalles);

//6.calcular subtotal
const subtotal = carrito.reduce(
    (total, producto) => total + precioConIva(producto.precio),
    0
);

console.log("Subtotal:", subtotal);



//Parte 4 objetos y Templates


const venta = {
    cliente: nombre,
    email: email,
    tipoCliente: tipoCliente,
    descuentoAplicado: descuento,
    costoEnvio: envio,
    productos: carrito,
    totalFinal: totalFinal
};



console.log(`
=============================
        BYTESTORE
=============================

Cliente: ${venta.cliente}
Email: ${venta.email}

Tipo: ${venta.tipoCliente} (${venta.descuentoAplicado}% de descuento)

-----------------------------

${venta.productos.map(producto =>
    `${producto.nombre} — $${precioConIva(producto.precio).toLocaleString("es-CO")}`
).join("\n")}

-----------------------------

Subtotal (IVA incluido): $${subtotal.toLocaleString("es-CO")}

Descuento: -$${descuentoDinero.toLocaleString("es-CO")}

Envío: ${envio === 0 ? "GRATIS" : "$" + envio.toLocaleString("es-CO")}

TOTAL A PAGAR: $${venta.totalFinal.toLocaleString("es-CO")}

=============================

¡Gracias por su compra!
`);