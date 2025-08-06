import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},  //function to declare only the defination willl write in App.jsx
    // so that we can use it in the App.jsx
    updateTodo: (id, todo) => {},   
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => { //use todo k pass sab context hai toh alag alag components me use karne k liye useTodo naam se function bana diya
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider