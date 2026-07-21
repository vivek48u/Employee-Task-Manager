import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLoaclStorage } from './Utils/Localstorage'
import { AuthContext } from './Contexts/AuthProvider'
import EmpReg from './Pages/EmpReg'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const { userData, setUserData, adminData, setuserData } = useContext(AuthContext)
  const [isSignup, setIsSignup] = useState(false);


  useEffect(() => {


    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)

    }

  }, [])




  const handleLogin = (email, password) => {
    const admin = adminData.find(
      (a) => a.email === email && a.password === password
    );
    
    if (admin) {
      setUser('admin')
      setloggedInUserData(admin)

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
          data: adminData,
        })
      )
      return
    }


    if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password)

      if (employee) {
        setUser("employee")
        setloggedInUserData(employee)

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            data: employee,
          })
        )
        return
      }
    }

    alert("Invalid Credentials")
  }




  return (
    <>
      {!user ? (isSignup ? (<EmpReg setIsSignup={setIsSignup} />) :
        (<Login handleLogin={handleLogin} setIsSignup={setIsSignup} />)) :
        user === "admin" ? (
          <AdminDashboard changeUser={setUser} data={loggedInUserData} />
        ) : (
          <EmployeeDashboard
            data={loggedInUserData}
            changeUser={setUser}
          />
        )}

    </>
  )
}

export default App
