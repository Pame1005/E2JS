const pizzas = [
    {
    id:1,
    nombre: "Jamón",
    Ingredientes: ["Jamón", "mozzarella", "aceitunas","Morrón"],
    Precio: "$590"
    },
   {
    id:2,
    nombre: "Rúcula y Crudo",
    Ingredientes: ["Jamón crudo", "mozzarella", "aceitunas negras","Rúcula"],
    Precio: "$800"
   },
   {
    id:3,
    nombre: "Tropical",
    Ingredientes: ["Jamón", "mozzarella", "Ananá"],
    Precio: "$750"
    },
    {
    id:4,
    nombre: "Palmitos",
    Ingredientes: ["Jamón", "mozzarella", "aceitunas negras","Palmito", "Salsa Golf"],
    Precio: "$800"
    },
    {
    id:5,
    nombre: "De la casa",
    Ingredientes: ["salmon ahumado", "mozzarella", "alcaparras"],
    Precio: "$900"
},
{
    id:6,
    nombre: "Veggie",
    Ingredientes: ["Mozzarella", "Berengena","Zucchini", "Cebolla", "Morrón", "Aceitunas"],
    Precio: "$700"
}
]
const arrayfiltrado = pizzas.filter (pizza => pizza.id % 2 !== 0)
console.log(`Las pizzas con id impar son:`)
console.log(arrayfiltrado)


console.log(`Hay pizzas de menor valor que "$600? ${pizzas.some(pizza => pizza.Precio < "$600")}`)

pizzas.map ((pizza) => {
    console.log(`El nombre de la pizza es: ${pizza.nombre}`)})

pizzas.map ((pizza) => {
    console.log(`El precio de la pizza es: ${pizza.Precio}`)})
pizzas.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} tiene un valor de: ${pizza.Precio}`)
})
