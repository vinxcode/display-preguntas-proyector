import { useState } from 'react'
import Comodines from './Comodines'
const preguntas = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function App() {
  const [estadosPreguntas, setEstadosPreguntas] = useState(preguntas.map(() => ({ contenido: "", color: "bg-green-500", hover: "hover:bg-green-600" })))

  const convertirX = (index) => {
    setEstadosPreguntas((estadosPreguntas) => {
      const nuevosEstados = [...estadosPreguntas]
      nuevosEstados[index] = {
        contenido: nuevosEstados[index].contenido === "" && "X",
        color: nuevosEstados[index].contenido === "" && "bg-red-400",
        hover: nuevosEstados[index].contenido === "" && "hover:bg-red-500"
      }
      return nuevosEstados
    })
  }

  return (
    <div className='flex flex-col font-tilt'>
      <header className='h-[65px] bg-gray-600 shadow-2xl font-tilt flex gap-5 items-center justify-center'>
        
      <img  className='h-[60px]' 
        src="../public/white.png" alt="" />
        <img  className='h-[40px]' 
        src="../public/cnx.png" alt="" />
        
      </header>
      <h1 className='text-center font-black text-6xl mt-10 text-white'>JUEGO DE LOS PRISIONEROS</h1>
      <section className='mx-auto w-[1000px] mt-10 grid grid-cols-6 gap-5'>
        {
          preguntas.map((pregunta, index) => (
            <div key={index}
              onClick={() => convertirX(index)}
              className={`${estadosPreguntas[index].color}
              h-[150px] flex flex-col justify-center align-center rounded-2xl
            ${estadosPreguntas[index].hover} cursor-pointer shadow-lg  solid border-white border-8`}
            >
              <p className='text-center font-black text-7xl text-white h-[70px]'>{estadosPreguntas[index].contenido === "" ? pregunta : "X"}</p>

            </div>
          ))
        }
      </section>

      <Comodines/>

    </div>
  )
}

export default App
