import { createContext, useContext } from "react";

//another way to create context
export const ThemeContext = createContext({
    themeMode: "light", //default value
    darkTheme: () => {}, // function to change theme
    lightTheme: () => {},// function to change theme
})


export const ThemeProvider = ThemeContext.Provider // exporting the provider
//just like we export useState, we can export useContext
//this does not manage state, it just provides the context to the components that consume it
//it is used to access the context in the components that consume it

export default function useTheme(){
    return useContext(ThemeContext) //
}