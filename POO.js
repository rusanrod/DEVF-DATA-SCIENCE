// creacion  de objetos por prototipo
function Persona(nombre){
    this.nombre = nombre
}

// console.log(Persona.prototype) //{}

Persona.prototype.saludar = function(){
    return `Hola ${this.nombre}` 
}

// console.log(Persona.prototype) // { saludar: [Function (anonymous)] }

// Creacion de objetos por clase

class Persona2{
    constructor(nombre){
        this.nombre = nombre
    }
    saludar(){
        return `Hola ${this.nombre}`
    }
}

// console.log(Persona2.prototype) //{}


class Animal{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    caminar(){
        return `Este animal camina`
    }
    comer(){
        return `Este animal come`
    }
    presentacion(){
        return `Hola! me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}

let perro = new Animal("Pancho", 4)
let gato = new Animal("Paco", 3)

perro.ladrar = function(){
    return "Guau"
}

gato.maullar = function(){
    return "miau"
}

// console.log(perro.ladrar())
// console.log(gato.maullar())

//
function Person(name, age, gender,interest){
    this.name=name
    this.age=age
    this.gender=gender
    this.interest=interest

}

Person.prototype.Bio = function(){
    let pronoun=""
    if(this.gender=="Male"){
        pronoun="He"
    }
    else{pronoun="She"}
    return `${this.name[0]} ${this.name[1]} is ${this.age} years old. ${pronoun} likes ${this.interest}`
}

Person.prototype.Greeting =function(){
    return `Hi! I'm ${this.name[0]}`
}

let person1 = new Person(["Bob", "Smith"], 32, "Male", ["Music", "Skiing"])
let person2 = new Person(["Diana", "Cope"], 28, "Female", ["Kickboxing", "Brewing"])

// console.log(person1.Bio())
// console.log(person2.Bio())

// console.log(person1.Greeting())

class FiguraGeometrica{
    constructor(base, height){
        this.base = base
        this.height = height
    }
    area(){
        return this.base * this.height
    }
    perimeter(){
        return 2 * this.base + 2 * this.height
    }
}

let cuadrado = new FiguraGeometrica(4,4)
let rectangulo = new FiguraGeometrica(5,2)
let triangulo = new FiguraGeometrica(4,4)
triangulo.area=function(){
    return this.base * this.height/2
}

// console.log(cuadrado.area())
// console.log(rectangulo.area())
// console.log(triangulo.area())

// let trianguloEquilatero = Object.create(triangulo)

class Animal1{
    constructor(brain, legs){
        this.brain = brain
        this.legs = legs
    }
}

let human = new Animal1(true, 2)
let pet = new Animal1(true,4)
pet.fleas = 4
let dog = Object.create(pet)
dog.fleas = 8
let cat = Object.create(pet)
cat.fleas = 4

console.log(dog.brain)
console.log(cat.legs)