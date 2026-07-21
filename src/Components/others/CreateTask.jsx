import React, { createContext, useContext, useState } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'
import { setLoaclStorage } from '../../Utils/Localstorage'
import { ClipboardCheck, FileCheckCorner, SavePlus } from 'lucide-react'

const CreateTask = ({ data, empdata }) => {

     const { userData, setUserData, adminData, setuserData } = useContext(AuthContext)
    const [taskTitle, setTitle] = useState('')
    const [taskDate, setDate] = useState('')
    const [Assign, setAssign] = useState('')
    const [category, setcategory] = useState('')
    const [taskDescription, setdesc] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        
        
        const newTask = { taskTitle, taskDate, category, taskDescription, active: false, newTask: true, failedTask: false, completedTask: false }
        const data = userData

        data.forEach(function (e) {
            if (Assign == e.firstName) {
                e.tasks.push(newTask)
                e.taskCount.newTask++
            }
        })

        localStorage.setItem('employees', JSON.stringify(data))

        
        
        


        setTitle('')
        setDate('')
        setAssign('')
        setcategory('')
        setdesc('')

    }

    
    return (
        <div className='relative border border-sky-400 bg-white shadow-md rounded-xl p-4'>
               <FileCheckCorner className='absolute top-4.5 h-10 w-10 p-2 rounded text-blue-500 bg-sky-100'/>
            <h1 className='pl-13 text-xl mt-1 font-bold'>Create New Task</h1>

            <form className='lg:flex flex-wrap items-start mt-6 justify-between'
                onSubmit={(e) => { submitHandler(e) }}
            >


                <div className='w-1/2'>
                    <div >
                        <h3 className='text-sm font-semibold mb-1'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => { setTitle(e.target.value) }} className='lg:w-4/5  border-2 border-gray-200  px-3 rounded  py-2 mb-4 outline-none placeholder:text-sm font-semibold ' type='text' placeholder='Enter Task Name...' />
                    </div>

                    <div >
                        <h3 className='text-sm font-semibold mb-1'>Date</h3>
                        <input value={taskDate} onChange={(e) => { setDate(e.target.value) }} className=' lg:w-4/5  border-2 border-gray-200  rounded px-3 py-2 mb-4 placeholder:text-sm font-semibold outline-none' type='date' />
                    </div >

                    <div>
                        <h3 className='text-sm font-semibold mb-1'>Assign To</h3>
                        <input value={Assign} onChange={(e) => { setAssign(e.target.value) }} className=' lg:w-4/5  border-2 border-gray-200 rounded px-3 py-2 mb-4 placeholder:text-sm font-semibold outline-none' type='text' placeholder='Employee Name' />
                    </div>

                    <div>
                        <h3 className='text-sm font-semibold mb-1'>Category</h3>
                        <input value={category} onChange={(e) => { setcategory(e.target.value) }} className='lg:w-4/5  border-2 border-gray-200 rounded px-3 py-2 outline-none placeholder:text-sm font-semibold' type='text' placeholder='design/dev etc...' />
                    </div>



                </div>
                <div className='flex items-start lg:w-2/5 flex-col'>
                    <h3 className='text-sm font-semibold mb-1'>Description</h3>
                    <textarea value={taskDescription} onChange={(e) => { setdesc(e.target.value) }} cols="30" rows="10" className='  border-2 border-gray-200  lg:w-full rounded p-2  outline-none'></textarea>
                    <div className='relative'>
                        <SavePlus size={20} className='absolute top-7.5 text-white cursor-pointer left-2'/>
                        <button className='lg:px-9 px-10 border py-2 border-sky-200 hover:bg-blue-600 shadow text-white mt-5 lg:py-2  rounded bg-blue-700 cursor-pointer text-sm font-semibold'>Create Task</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default CreateTask
