import React, { useContext } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import TaskStatus from '../others/TaskStatus'
import { AuthContext } from '../../Contexts/AuthProvider'
import AdminNav from '../others/AdminNav'

const AdminDashboard = (props) => {
    const { userData, setUserData, adminData, setuserData } = useContext(AuthContext)


    return (
        <div className='h-full bg-[#f3f4f6]'>
            <AdminNav changeUser={props.changeUser} data={props.data} />
            <div className='p-3'>
                <CreateTask data={props.data} />
            </div>
            <div className='p-2'>
                 <TaskStatus data={props.data} />
            </div>
           
        </div>
    )
}

export default AdminDashboard
