import { createSlice, nanoid } from "@reduxjs/toolkit"; 

const initialState = { // Initial state for the todo slice, it is a object
    todos: [{id: 1, text: "Learn Redux Toolkit", completed: false}]
}

function sayHello(){
    console.log("Hello world");
    
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Generates a unique id for each todo, 
                text: action.payload // The text of the todo is taken from the action payload object
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload)
        },
            
    }
})


export const { addTodo, removeTodo } = todoSlice.actions  // Export the actions to be used in components

export default todoSlice.reducer // Export the reducer to be used in the store