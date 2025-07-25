import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={() => {setColor("red")}} // onClick={setColor()->cant use this}on click function here and need argument and if we give argument using parentheis than the fucnton will call and on click get the return value of function
        //this is problem of onclick
        //() => {setColor("red")} -> callback lelo
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}>Red</button>
        <button 
         onClick={() => {setColor("green")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}>Green</button>
        <button 
         onClick={() => {setColor("blue")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}>Blue</button>
        <button 
         onClick={() => {setColor("violet")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "violet"}}>Violet</button>
        <button 
         onClick={() => {setColor("Black")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "black"}}>Black</button>
        <button 
         onClick={() => {setColor("Yellow")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "yellow"}}>Yellow</button>
        <button 
         onClick={() => {setColor("purple")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "purple"}}>Purple</button>
        
      </div>
    </div>
    </div>
  )
}

export default App
