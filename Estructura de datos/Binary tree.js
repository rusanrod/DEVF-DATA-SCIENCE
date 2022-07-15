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
            node.left = this.removeNode(this.left, key)
            return node
        } else if(key > node.data ){
            node.right = this.removeNode(node.right, key)
            return node
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

            node.right = this.removeNode(node.right,aux.data)
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
    
    // Search
    search(node, data){
        if(node===null){
            return null
        } else if(data< node.data){
            return this.search(node.left,data)
        } else if(data > node.data){
            return this.search(node.right,data)
        }else{
            return node
        }
    }
    //Pre orden
    preOrder(node){
        if(node!==null){
            console.log(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }  
    }  
    // In orden
    inOrder(node){
        if(node!==null){
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
    }
    
    // Post orden
    postOrder(node){
        if(node!==null){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data)
        }
    }
}