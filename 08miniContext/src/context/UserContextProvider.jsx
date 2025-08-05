import React from "react";
import UserContext from "./UserContext";

// this file provides the UserContext to its children components
//it will be used to share user data across components without prop drilling

const UserContextProvider = ({children}) => { // children is the components that will consume this context
    const [user, setUser] = React.useState(null)// state to hold user data
    return(
        <UserContext.Provider value={{user,setUser}}> // providing the user and setUser to the context
        {children} // rendering the children components inside the UserContext.Provider
        </UserContext.Provider>
    )
    //U
}

export default UserContextProvider