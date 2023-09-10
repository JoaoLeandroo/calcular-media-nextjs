"use client"
import { useState, useEffect } from "react"

export default function Home() {

  const [nota1, setNota1] = useState('')
  const [nota2, setNota2] = useState('')
  const [media, setMedia] = useState('')

  useEffect(() => {
    if(media === ''){
      return
    }

    if(nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 ) {
      alert('Insira os dados de maneira correta.')
      document.querySelector("#nota1").value = ""
      document.querySelector("#nota2").value = ""
      return
    }
    if(media >= 7) {
      alert('Aluno Aprovado ' + media)
      document.querySelector("#nota1").value = ""
      document.querySelector("#nota2").value = ""
    }else{
      alert("Aluno Reprovado " + media)
      document.querySelector("#nota1").value = ""
      document.querySelector("#nota2").value = ""
    }

    setMedia('')
    setNota1('')
    setNota2('')
    return

  }, [media])

  function calcularMediaAluno() {
    if(nota1 === "" || nota2 === "") {
      alert("Informe todos os dados necessarios.")
      document.querySelector("#nota1").value = ""
      document.querySelector("#nota2").value = ""
      return
    }
    const nota1Convert = parseFloat(nota1)
    const nota2Convert = parseFloat(nota2)
    setMedia((nota1Convert+nota2Convert)/2)
    return
  }

  return(
    <section className="w-[400px] h-[300px] bg-slate-800 flex flex-col items-center justify-center rounded-lg gap-3">
      <div className="mt-2">
        <label htmlFor="nota1" className="text-white font-semibold mr-2">NOTA 1:</label>
        <input 
        type="number"
        id="nota1"
        onChange={(e) => setNota1(e.target.value)} 
        className="rounded-md bg-slate-300 p-1"/>
      </div>
      <div className="mt-2">
        <label htmlFor="nota2" className="text-white font-semibold mr-2">NOTA 2:</label>
        <input 
        type="number" 
        id="nota2"
        onChange={(e) => setNota2(e.target.value)} 
        className="rounded-md bg-slate-300 p-1"/>
      </div>
      <button
      onClick={calcularMediaAluno}
      className="bg-blue-800 p-2 rounded font-semibold text-white hover:bg-blue-900 mt-2">Calcular Media</button>
    </section>
  )
}