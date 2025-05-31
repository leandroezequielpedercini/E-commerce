import Misproductos from "./Misproductos"

function Carrito({productos}){
return(
    <>
    
    {productos.length >0 ? productos.map((producto) => 
        <Misproductos producto={producto}/>
    )
    :  <p>Carrito vacio...</p>}
    
    
    </>



)

}

export default Carrito