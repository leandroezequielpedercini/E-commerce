import { useEffect, useState } from "react";




function Misproductos(producto){
   

 const [ contador , setcontador ] = useState([0]) 
 const [ precioTotal , setprecioTotal ] = useState([248.99] )


 const precio = (() => {
 setprecioTotal(Number( ))
console.log(precioTotal)
})



 

const suma = (() => {
 setcontador(Number(contador + 1 ))

})



const resta = (() => {
 setcontador(Number( contador - 1  ))

})




const [ productosCarrito , setproductosCarrito ] = useState([producto]) 


/* const carritoA = (() => {
const hola = producto
hola.push(productosCarrito) 
setproductosCarrito.push(hola)
console.log(hola)
})

 */





 function carritoA(producto) {
  const nuevoProducto = productosCarrito
  nuevoProducto.push(producto)
  setproductosCarrito(nuevoProducto)
  console.log(nuevoProducto)

  } 
 


    
    const [ productos , setDato ] = useState([])


    
    useEffect(() => {

        fetch("https://68100d9027f2fdac24101f7c.mockapi.io/producto")    
        .then(resp => resp.json())
        .then(data => (setDato(data)) )
    
}), []


    return(

        <div className="tarjetas-De-Productos">
        {productos.map(producto => 
                
                <div key={producto.id} className="tarjetas-De-Producto">
                  
                  
                  <div className="div-Productos"> 
                
                
                <h1 className="h1-title" >Titulo: {producto.titulo}</h1>
                <img className="imagenes" src={producto.imagen} alt={producto.id} />
                <p className="parrafo-Id">ID:{producto.id}</p>
                <p className="parrafo-Description">Descripcion: {producto.descripcion}</p> 
                <p className="parrafo-Price">$ {producto.precio } </p>
                <img onClick={resta}  className="btnRestar" src="public/resta.jpg" alt="Restar" />
                <img  onClick={suma} className="btnSumar" src="public/suma.jpg" alt="Sumar" />
              <button onClick={precio} className="btnSumar" type="button"></button>
                <h1 onClick={precio} className="h1-totalCarrito">{contador}</h1>

              {   <button className="anadir-Carrito" >{carritoA}  Añadir al carrito</button>}
        

                
                                    </div>  
                

                </div>
                


             )}



    </div>
    )
       
}
    
export default Misproductos
