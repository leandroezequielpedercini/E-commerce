/* import { useState } from 'react' */
/* import reactLogo from './e-commerce-business-company-logo-.jpeg'
import viteLogo from '/vite.svg' */
import './App.css'
import Head from './components/head'
import TarjetasProductos from './components/tarjetasProductos'
function App() {
 /*  const [count, setCount] = useState(0)
 */
  return (
    <div>

      <div className='div-Head'>
        <Head
         textoHead = {"Fittnass"}/>
        
      </div>
   
   
    <main >
    <TarjetasProductos/>    
    </main>
      
   

    <footer>
     

    </footer>
      
    </div>
  )
}

export default App
