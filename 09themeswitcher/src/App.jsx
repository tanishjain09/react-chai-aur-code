import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect( () => {
    document.querySelector('html').classList.remove("light",
    "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]) //function to work when themeMode changes

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> // providing the context to the components that consume it
    //inthis case we have to pass the value prop to the ThemeProvider
    //this is how we pass the context
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card /> 
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
