import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLoaclStorage } from '../Utils/Localstorage'

export const AuthContext =createContext()
const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)
    const [adminData,setadminData]=useState(null)

  useEffect(() => {
    setLoaclStorage()

    const {employees,admin}=getLocalStorage()
   setUserData(employees)
   setadminData(admin)

  
  }, [])


 
  
  return (
    <div>
      <AuthContext.Provider value={{userData,setUserData,adminData,setadminData}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
