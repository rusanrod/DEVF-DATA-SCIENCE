//los objetos son una implementacion de las tablas hash
let obj = {
    Gil: '12121',
    Serch: '1414'
}
obj.hasOwnProperty("Gil")
obj.hasOwnProperty='4545'

//los mapas son una forma de implementacion de las tablas hash
const coleccion = new Map()
coleccion.set("Gil",12121)
coleccion.set("Serch",45454)
console.log(obj)
console.log(coleccion)
coleccion.size()

// Implementacion 

class HashTable{
    constructor(){
        this.table = new Array(127)
        this.size = 0
    }

    _hash(key){
        let hash = 0
        for(let i = 0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }
    
    set(key, value){
        const index =this._hash(key)

        if(this.table[index]){
            for(let i =0; i<this.table[index].length; i++){
                if(this.table[index][i][0]===key){
                    this.table[index][i][1] = value
                    return
                }
            }
            this.table[index].push([key,value])
        }else{
            this.table[index] = []
            this.table[index].push([key,value])
        }
        
        this.size++
    }

    get(key){
        const index =this._hash(key)
        if(this.table[index]){
            for(let i =0; i<this.table[index].length; i++){
                if(this.table[index][i][0]===key){
                    return this.table[index][i][1]
                }
            }
        }
        return undefined
    }

    remove(key){
        const index =this._hash(key)
        if(this.table[index]){
            for(let i =0; i<this.table[index].length; i++){
                if(this.table[index][i][0]===key){
                    this.table[index].splice(i,1)
                    this.size--
                    return true
                }
            }
        }
        else{
            return false
        }
    }
    show(){
        this.table.forEach((values,index) => {
            const addValues = values.map(([key, value]) => 
                `[${key}: ${value}]`
            )
            console.log(`${index}: ${addValues}`)
        })
    }
}
