
import Formulario from '../Formulario/Formulario'
import Titulo from '../Titulo/Titulo'

function FormContainer() {
   const titulo = 'Titulo de Form'
   const subTitulo = 'sub Titulo de Form'

   function saludar() {
    console.log('saludo')
   }

return (
    <>
         <Titulo  titulo= { titulo } subTit= { subTitulo } />
         <Formulario place='Ingresar el dato' saludo={ saludar } />
    </> 
  )
}

export default FormContainer