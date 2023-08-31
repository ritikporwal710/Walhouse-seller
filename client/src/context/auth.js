import { useState,useEffect,useContext,createContext } from 'react';

const AuthContext = createContext();

const [auth,setAuth] = useState({
    user: null,
    token: ""

});

const AuthProvider = () =>{

}