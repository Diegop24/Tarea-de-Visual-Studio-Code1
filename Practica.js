/* Sintaxis del lenguaje
Variable y tipos de datos*/
console.log("Funcionando...")
let numero = 10
let num1; //undefined
let num2 = null // nulo
let entero = 10
let decimal = 1.2
let string = "Hello World"
let booleano = false
let fecha = new Date()
let dd = fecha.getDate(),
    mm = fecha.getMonth() + 1,
    aa = fecha.getFullYear(),
    hoy = `${aa}-${mm}-${dd}`

const pi = 3.1416 //Constante
console.log("Numero1 =", num1)
console.log(`Numero2 = ${num2}`)
console.log(`fecha de hoy= ${fecha}`)
console.log(hoy)
// areglos, json y objetos
let numeros = [1, 2, 3, 4, 5]
let colores = ["Turquoise", "Pink", "Light blue"];

const json ={
    "nombres": ["yadi", "chiki"],
    "genero": "Masculino"
};

const teacher ={
    nombre: 'Diego Peñarrieta',
    genero: 'Masculino',
    juegos: ['Pugb Mobile', 'futbol'],
    conocimientos: {
        lenguajes: [
            'JS', 'Python', 'Java', 'hp', 'Español',
        ],
        materias: { Nivel1: 'Logica', Nivel2: 'POO', Nivel3: 'POOI' }
    }
};
json.genero= "M"
teacher.nombre = "Diego Peñarrieta"
teacher.edad = 20
console.log('Json', json, json.genero);
console.log('Objetos', teacher.conocimientos.lenguajes[1],teacher.conocimientos.materias.Nivel1);
// Estructuras de control
let n1 = 10
let n2 = 15
if (num1 === undefined)
    console.log(`${num1}=undefined`);
if (num2 === null)
    console.log(`${num2}=null`);
if (n1 == 0){
    console.log(n1);
} else if (n1 == n2) {
    console.log(`${n1}=${n2}`);
} else {
    console.log(`${n1}!=${n2}`)
}
let num = 8
let rec = num % 2;
switch (rec) {
    case 0:
        console.log(`${rec} - ${num} es positivo`);
        break;
    case 1:
        console.log(`${rec} - ${num} es Impar`);
        break;

    default:
        if (isNaN(rec))
            console.log(`${rec}=Error`);
        break;  
}
console.log("Sali del Switch");
// Bucles
// While
let i = 0
console.log("bucle while", colores)
while (i < colores.length) {
    console.log(i, colores[i])
    i = i + 1
}
// Bucle For usado mas incrementos o decremento automaticos
console.log("recorrido for incremento", colores);
for (let i = 0; i < colores.length; i ++) {
    console.log(i, colores[i]);
}
// In
console.log("Recorrido for in", colores)
for (let j in colores) {
    console.log(j, colores[j])
}
// Of
console.log("recorrido for of", colores)
for (let color of colores){
    console.log(color)
}
let nombr = "Diego Peñarrieta"
for (let caracter of nombr) {
    console.log(caracter)
}
const Personas = [
    {"Nombre": "Diego", "Apellidos": "Peñarrieta" },
    {"Nombre": "Merlinthon", "Apellidos": "Guale"},
    {"Nombre": "Rocio", "Apellidos": "Guale"}
]
console.log("of");
for (let persona of Personas) {
    console.log(persona,persona.Nombre)
}
// recorridos de objetos iterables
console.log("Foreach");
Personas.forEach(persona => { 
    if (persona.Nombre != "Rocio")
        console.log(persona.Nombre)
})
// Map
const persons = Personas.map(person => person.Nombre)
console.log("Map", persons);
// Filter
const person = Personas.filter
(person => person.Nombre != "Rocio")
console.log("Filter", person);
// Find
const onePerson = Personas.find (person => person.Nombre === "Rocio")
console.log("Find", onePerson);
//Funciones
function sumar() {
    console.log(15 + 20);
}
sumar ()
const suma = () => console.log("Suma con Arrow funcion", 15+20);
suma ()
//Funcion multiplicar
function multiplicar(n1, n2) {
    return n1 * n2
}
let resp = multiplicar(7, 24)
console.log("Multiplicación sin arrow", resp);
const multi = (n1, n2) => n1 * n2
console.log("Multiplicación", multi(7,24));
//Funcion dividir
function dividir(n1, n2 = 2) {
    let resp = 0
    try {
        resp = n1 / n2
    } catch (e) {
        console.log("Ha ocurrido un error:", e.message)

    }
    return resp
}
resp = dividir(4, 4)
console.log("Divición sin arrow", resp);
resp = dividir(4, 0)
console.log(resp);

const divi = (n1, n2 = 4) => {
    let resp = 0 
    try {
        resp = n1 / n2
    } catch (e) {
        console.log("Ha ocurrido un error:", e.message)

    }
    return resp
}
console.log("Divición", divi(8));
//fecth. sirve para consumir api(resouesta del servidor que entrega una respuesta con datos para ser consumidos)
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(datos => {
        //console.log(datos.results)
       // datos.results.forEach(poke=>console.log(poke.name))
    })
    .catch(error => console.log("Error del Api: ", error))
// async await: devuelve un objeto asincronico

const obtenerDatos = async () => {
    try {
        //const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos = await res.json()
        //console.log("Async await");
        //datos.results.forEach(poke => console.log(poke.name))
    } catch (error) {
        console.log("Eroor del Api con async: ", error )
    }
}
obtenerDatos()
//Don
let contenido = document.getElementById('Contenedor')
let Variable = document.getElementById('Variable')
console.log(contenido);
console.log(Variable);
Variable.innerHTML = 'Enteros, Decimales, String, Boleanas, fechas';
Variable.style.color = "White"
Variable.style.background = "#118545"
console.log(Variable);
let Concepto = document.querySelector('.Concepto')
console.log(Concepto);
Concepto.innerHTML = "Diego Peñarrieta "
let conceptos = document.querySelectorAll('.Concepto')
let cont = 1 
conceptos.forEach(parrafo => {
    parrafo.innerHTML = `Diego Peñarrieta#${cont}`
    console.log(parrafo);
    cont = cont + 1
})
console.log(conceptos);
//Eventos 
let boton = document.getElementById('Boton2')
let Valor = document.getElementById('Valor')
boton.addEventListener('mouseover', () => {
    console.log("has pasado el mouse");
})
boton.addEventListener('click', () => {
    let nodo = document.createElement("p")
    nodo.innerHTML = "Elemento Agregado"
    nodo.style.color = "pink"
    contenido.appendChild(nodo)

})