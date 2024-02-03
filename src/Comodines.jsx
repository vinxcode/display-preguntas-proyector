import { useState } from "react"


const Comodines = () => {

const [estado1, setEstado1] = useState("")
const [estado2, setEstado2] = useState("")
const [estado3, setEstado3] = useState("")
const [estado4, setEstado4] = useState("")
const [estado5, setEstado5] = useState("")
const [estado6, setEstado6] = useState("")



    return (
        <div className="mx-auto w-1/3 text-xl mt-[50px] flex flex-col font-tilt px-[35px] py-[20px] bg-gray-200 rounded-3xl">
            <table className="">
                <thead className="">
                    <tr>
                        <th className="p-3">Comodin</th>
                        <th className="p-3">Equipo A</th>
                        <th className="p-3">Equipo B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-10 py-2">Cambio de pregunta</td>
                        <td className="text-3xl text-center" onClick={() => setEstado1("X")}>{estado1}</td>
                        <td className="text-3xl text-center" onClick={() => setEstado2("X")}>{estado2}</td>
                    </tr>
                    <tr>
                        <td className="px-10 py-2">Preguntar a alguien</td>
                        <td className="text-3xl text-center" onClick={() => setEstado3("X")}>{estado3}</td>
                        <td className="text-3xl text-center" onClick={() => setEstado4("X")}>{estado4}</td>
                    </tr>
                    <tr>
                        <td className="px-10 py-2">Preguntar al publico</td>
                        <td className="text-3xl text-center" onClick={() => setEstado5("X")}>{estado5}</td>
                        <td className="text-3xl text-center" onClick={() => setEstado6("X")}>{estado6}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Comodines