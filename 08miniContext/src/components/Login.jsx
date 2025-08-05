import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const {setUser} = useContext(UserContext) //UserContest returns as object with user and setUser properties but we only need setUser here so we destructure it by writing {setUser} 

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'  />
            {" "}
            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'  />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
