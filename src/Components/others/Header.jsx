import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'
import { CircleUserRound, LogOut, User } from 'lucide-react'


const Header = (props) => {


  const { userData, setUserData, adminData, setuserData } = useContext(AuthContext)







  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')

  }


  return (
    <div className='flex shadow  items-center pb-3 p-5  gap-5 justify-between '>
        <h1 className='text-xl font-medium'>Hello <br /><span className='text-2xl  font-semibold'>{props.data.firstName}👋</span></h1>
      <div className='lg:relative'>
        <CircleUserRound size={35} className='absolute  -left-11  -top-0.5 text-gray-700 rounded-full ' />
        <h2 className='text-2xl text-gray-900 font-semibold'>Employee Dashboard</h2>
      </div>

      <div className='relative'>
        <LogOut size={22} className='absolute right-2 text-red-400 cursor-pointer bottom-2' />
        <button
          onClick={logoutUser}
          className='border shadow-sm py-1  lg:p-2 lg:pr-11  pr-9 px-3  text-red-400 rounded font-medium  cursor-pointer'>Log Out</button>
      </div>
    </div>
  )
}

export default Header
