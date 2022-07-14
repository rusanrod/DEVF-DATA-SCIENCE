class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }

    //funciones a implementar
    // Insertar
    insert(data){
        let newNode = new Node(data)
        if(this.root===null){
            this.root = newNode
        } else{
            //Crear una funcion para encontrar donde guardar el nodo
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode
            }
            else{
                this.insertNode(node.left, newNode)
            }
        } else{ 
            if(node.right === null){
                node.right = newNode
            }
            else{
                this.insertNode(node.right, newNode)
            }

        }
    }
    // Remover
     remove(data){
        this.root = this.removeNode(this.root, data)
     }
     removeNode(node, key){
        if(node===null){
            return null
        } else if(key < node.data){
            node.left = this.remove(this.left, key)
            return node
        } else if(key > node.data ){
            node.right = this.removeNode(node.right, key)
        } else{
            if(node.left === null && node.right===null){
                node = null
                return node
            } else if(node.left===null){
                node = node.right
                return node
            } else if(node.right=== null){
                node = node.left
                return node
            } 

            let aux = this.findMinNode(node.right)
            node.data =aux.data
            return node

        }

     }
    // Funcinoes complementarias
    // Buscar nodo minimo
    findMinNode(node){
        if(node.left===null){
            return node
        } else{
            this.findMinNode(node.left)
        }

    }
    // Obtener nodo raiz
    getRootNode(){
        return this.root
    }
    // In orden
    // Post orden
    // Search
}