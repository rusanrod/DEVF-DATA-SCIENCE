class Nodo{
    constructor(data){
        this.data=data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.currentSize = 0
    }
    add(data){
        const node = new Node(data)
        if(this.head === null){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next=node
        }

        this.currentSize++
    }
    remove(data){
        if(this.head===null){
            return null
        } else{
            let current= this.head
            let prev = null
            while(current.data != data ){
                current = current.next
            }
            if(prev===null){
                this.head = current.next
            }else{
                prev.next = current.next
            }
            this.currentSize--
            return data
        }

    }
    size(){
        return this.currentSize()
    }
    print(){
        if(this.head===null){
            return null
        }
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    isEmpty(){
        return this.currentSize===0
    }
    clear(){
        this.head = null
        this.currentSize = 0
    }

    getFirst(){
        return this.head.data
    }

    getLast(){
        if(this.head===null){
            return null
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        return current.data
    }
    search(data){
        if(this.head===null){
            return null
        }
        let current = this.head
        while(current.data!=data){
            current = current.next
        }
        return current
    }
}