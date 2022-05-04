
// import Titulo from '../Titulo/Titulo'

export default function Formulario({saludo, place}) {

    // un parametro(una prop) las envuelve en un objeto y se la pasa a tutulo: 
  return (

    <div>

        {/* <Titulo titulo= 'Soy titulo de input' subTit= 'Subtitulo de input'/> */}
       
        <form> 
            
           <input type="text" placeholder={ place }/>
           <button onClick={saludo} >saludo</button>

        </form>
       

    </div>
  )
}
