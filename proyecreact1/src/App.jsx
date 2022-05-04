import { useState } from 'react'
import logo from './logo.svg'


import Titulo from './components/Titulo/Titulo'
import Formulario from './components/Formulario/Formulario'
 import FormContainer from './components/ComponenteContenedor/FormContainer';

 import './App.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';


// Componente contenedor: App

function App() {

  
  const tit = 'Soy titulo de App'
  const subTit = 'Soy Subtitulo de App'

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

  
  // llamadas APIS o fuentes externas

  return (

    <div className="App">
      <NavBar/>
      
      {/* la llamada - elemento*/}

  
    <div>
      <Titulo titulo= {tit} subTit= {subTit}>
         <Formulario/>
      </Titulo>
     
    </div>
                                                                                                                                                                                                          
      {/* <Formulario saludo = { saludo } /> */}
      {/* componente contenedor */}
      <FormContainer/>

    </div>    
  )
}

export default App
