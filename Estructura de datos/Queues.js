//Colas por medio de arreglos

class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(element){
        this.queue.push(element)
        return this.queue
    }
    dequeue(){
        return this.queue.shift()
    }
    peek(){
        return this.queue[0]
    }
    front(){
        this.peek()
    }
    back(){
        return this.queue[this.queue.length-1]
    }
    size(){
        return this.queue.length
    }
    print(){
        console.log(this.queue)
    }
    isEmpty(){
        return this.size()===0
    }
    clear(){
        this.queue=[]
    }
}

let queue = new Queue()

class Queue2{
    constructor(){
        this.queue = {}
        this.count = 0
        this.head = 0
    } 
    enqueue(element){
        this.queue[this.count] = element
        this.count++
        return this.queue
    }
    dequeue(){
        const result = this.queue[this.head]
        delete this.queue[this.head]
        this.head++
        // this.count--
        return result
    }
    peek(){
        return this.queue[this.head]
    }
    front(){
        this.peek()
    }
    back(){
        return this.queue[this.count-1]
    }
    size(){
        return this.count-this.head
    }
    print(){
        console.log(this.queue)
    }
    isEmpty(){
        return this.count === this.head()
    }
    clear(){
        this.queue={}
        this.count = 0
        this.head = 0
    }
}