
import Misproductos from "./Misproductos"



function ContedorDeProductos({productos,}) {
      
 
 
 



    return(
       <div>
       
       <div>
{productos.map(producto =>
    <Misproductos producto={producto} />

         )}
          </div>
          
          
          
         
          </div>
    )    
}

export default ContedorDeProductos  