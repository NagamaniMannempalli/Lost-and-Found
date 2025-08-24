import { createContext, useContext, useState, useEffect } from "react"; 
const AuthContext = createContext(); 
export const AuthProvider = ({ children }) => { 
  const [isLoggedIn, setLoggedIn] = useState(false); 
  useEffect(() => { 
    const storedStatus = JSON.parse(localStorage.getItem("isLoggedIn")); 
    if (storedStatus) setLoggedIn(storedStatus); 
  }, []); 
  useEffect(() => { 
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn)); }, [isLoggedIn]); 
    return ( 
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}> 
    {children} 
    </AuthContext.Provider> ); }; 
export const useAuth = () => useContext(AuthContext);