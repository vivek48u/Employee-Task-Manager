import { CircleUserRound, LogOut, UserStar } from 'lucide-react'
import React from 'react'

const AdminNav = (props) => {

    const logoutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')

    }
    return (
        <div className='flex  items-center  gap-5 pb-3 p-5 justify-between'>
      <h1 className='text-xl font-medium'>Hello <br/><span className='text-2xl font-semibold'>Admin 👋</span></h1>
      <div className='lg:relative'>
        <UserStar size={35} className='absolute -left-11 -top-0.5 text-gray-700  ' />
        <h2 className='text-2xl text-gray-900  font-semibold'>Admin Dashboard</h2>
      </div>
      
      <div className='relative'>
        <LogOut size={22} className='absolute right-2 text-red-400 cursor-pointer bottom-1'/>
        <button
      onClick={logoutUser}
      className='border shadow-sm py-1 p-2 pr-11 px-3  text-red-400 rounded font-medium  cursor-pointer'>Log Out</button>
      </div>
    </div>
    )
}

export default AdminNav
