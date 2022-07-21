let pizzas = [{
    id: 1,
    nombre: "Muzzarella",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Oregano", "Aceitunas"],
    precio: 600
},{
    id: 2,
    nombre: "Jamón y Morrones",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Jamón", "Morrones", "Aceitunas"],
    precio: 1200
},{
    id: 3,
    nombre: "Fugazzeta",
    ingredientes:["Queso Muzzarella", "Cebolla", "Oregano", "Aceitunas"],
    precio: 900
},{
    id: 4,
    nombre: "Jamón y Anana",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Jamón", "Anana", "Cerezas", "Oregano"],
    precio: 1200
},{
    id: 5,
    nombre: "Cochina",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Papas Fritas", "Huevo Frito"],
    precio: 800
},{
    id: 6,
    nombre: "Americana",
    ingredientes:["Queso Cheddar", "Salsa Barbacoa ", "Cebolla Crispy", "Panceta"],
    precio: 1600
}];


// PIZZAS IMPARES
// const impares = pizzas.filter(valorObjeto => valorObjeto.id % 2 !== 0);

// console.log(impares);

// CORRECCION
const impares = pizzas.filter(valorObjeto => valorObjeto.id % 2 !== 0);

impares.forEach((elemento) => console.log(`El id de este objeto es impar: ${elemento.nombre}`));


// MENOR A 600 PE
// const precio = pizzas.filter(valorObjeto => valorObjeto.precio <= 600);

// console.log(`Estamos en ARG pero por $${precio[0].precio} podes comer una: ${precio[0].nombre}`);

// CORRECCION
const menorPrecio = precio => precio.precio < 600;

if (pizzas.some(menorPrecio) != true ){
  console.log("No hay pízzas que cuesten menos de $600");  
}else {
    console.log("Si tenemos pizzas por menos de $600");
};


// NOMBRES PIZZAS

// const nombrePizzas = pizzas.filter(valorObjeto => valorObjeto.nombre);

// for (let index = 0; index < nombrePizzas.length; index++) {
//     const listaPizzas = nombrePizzas[index].nombre;
//     console.log("Pizza de: " + listaPizzas);
// }

// CORRECCION
pizzas.forEach(elemento => console.log(`Tenemos pizza de: ${elemento.nombre}`));



// PIZZAS PRECIOS
// const precioPizzas = pizzas.filter(valorObjeto => valorObjeto.precio);

// for (let index = 0; index < nombrePizzas.length; index++) {
//     const listaPizzas = nombrePizzas[index].nombre;
//     const listaPizzasPrecio = precioPizzas[index].precio;
//     console.log(`Aprovecha tu pizza de ${listaPizzas} a solo $${listaPizzasPrecio}`);

// }
// CORRECCION
pizzas.forEach(elemento => console.log(`Tenemos pizzas de: $${elemento.precio}`));

// PIZZAS CON PRECIOS
pizzas.forEach(elemento => console.log(`Tenemos pizzas de ${elemento.nombre} a $${elemento.precio}`));



