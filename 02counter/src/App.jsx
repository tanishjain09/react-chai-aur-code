import { useState } from 'react' //useState is hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 

  const [counter, setCounter] = useState(0) //counter is variable and setCounter is a function resonsible for update in variable

  // let counter = 256;

  const addValue = () => {
      if(counter < 20){
      counter += 1;
      setCounter(counter);

      // write about  hooks in notes
    }
  };

  const decreaseValue = () => {
    // counter -= 1;
    if(counter > 0){
    setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      disabled = {counter >= 20}
      >Add value</button>
      <br /> <br />
      <button
      onClick={decreaseValue}
      disabled = {counter <= 0}
      >Decrease value</button>
      
    </>
  )
}

export default App
