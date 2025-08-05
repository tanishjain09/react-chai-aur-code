import React from "react";

//this file creates a context for user data
//it will be used to share user data across components without prop drilling
const UserContext = React.createContext()//creating a context object using React's createContext API

export default UserContext 