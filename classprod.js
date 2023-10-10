class ProductManager{
    constructor(){
        this.products= []
    }
     AddProduct(title,description,price,thumbnail,code,stock){
        code=1
        if (this.products.length>0){
            code=this.products[this.products.length-1].code+1
        }
        let busqueda=this.products.find((item)=>item.code===code)
        if (busqueda){
            console.log("este codigo ya está en uso")
            return
        }
        let Producto={
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if (!title || !description || !price || !thumbnail || !stock) {
            console.log("Faltan valores requeridos para agregar el producto.");
            return;
        }
        this.products.push(Producto)
     }
     GetProduct(){
        this.products.forEach(item=>{
            console.log(item)
        })
     }
     GetProductById(caramelo){
        let producto=this.products.find((item)=>{
            return item.code===caramelo
        })
        if(producto){
            console.log(producto)
        }
        else{
            console.log("not found")
            return
        }
     }
}
const elemento= new ProductManager()
elemento.AddProduct("caramelo","vainilla",100,"www.caramelo.com/img1",1,1100)
elemento.AddProduct("caramelo","frutilla",120,"www.caramelo.com/img2",1,100)
elemento.AddProduct("caramelo","manzana",10,"www.caramelo.com/img2",1,1200)
elemento.GetProduct()
elemento.GetProductById(1)
elemento.GetProductById(8)