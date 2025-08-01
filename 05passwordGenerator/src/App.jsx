
import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook use to take reference of the input element so that we can access it directly without using state
  //it is used to store a mutable value that does not cause re-render when it changes
  const passwordRef = useRef(null) // varibale to hold the reference to the input element

  const passwordGenerator = useCallback(() => { 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword]) //useCallback is used to memoize the function so that it doesn't get recreated on every render unless its dependencies change.
  //setPassword is passed as a dependency so that it gets updated when password changes better for optmization

  const copyPasswordToClipboard = useCallback(() => {  // function to copy the password to clipboard useCallback is used to memoize the function
    passwordRef.current?.select(); //useRef hook to access the input element and select the text show that it can be copied -> it optimise
    passwordRef.current?.setSelectionRange(0, 999);//use for device to select the text in the input element 
    window.navigator.clipboard.writeText(password) // write the password to clipboard
  }, [password]) //password is the dependency of this function so that it gets updated when password changes

  useEffect(() => { //page load hone par ye log hoga, it has more control over when the function is called
    passwordGenerator()
  }, [length, numberAllowed, charAllowed]) //kuch bhi change ho to passwordGenerator function ko call karega 
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}  //useRef hook to access the input element directly
        />
        <button
        onClick={copyPasswordToClipboard} //onClick event to copy the password to clipboard it is a callback function
        className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
