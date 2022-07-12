// Stacks por medio de arrays

class Stack{
    constructor(){
        this.stack = []
    }
    push(element){
        this.stack.push(element)
        return this.stack
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length-1]
    }
    size(){
        return this.stack.length
    }
    isEmpty(){
        return this.stack.length === 0
    }
    clear(){
        this.stack = []
    }
    print(){
        console.log(this.stack)
    }
}

let pila = new Stack()

console.log(pila.isEmpty())


//Stacks por medio de objetos

class Stack2{
    constructor(){
        this.stack = {}
        this.count = 0
    }
    push(element){
        this.stack[this.count] = element
        this.count++
        return this.stack
    }
    pop(){
        this.count--
        const result = this.stack[this.count]
        delete this.stack[this.count]
        return result
    }
    peek(){
        return this.stack[this.count -1]
    }
    size(){
        return this.count
    }
    print(){
        console.log(this.stack)
    }
    isEmpty(){
        return this.count === 0
    }

    clear(){
        this.stack = {}
        this.count = 0
    }
}

let pila2 = new Stack2()
pila2.push('verde')
pila2.push('rojo')
console.log(pila2)
