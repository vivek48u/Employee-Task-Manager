import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'
import { CircleCheckBig, CircleX, FilePlusCorner, SquareActivity, UserCircle, UserCircle2Icon, UserIcon } from 'lucide-react'

const TaskStatus = () => {

    const { userData, setUserData, adminData, setuserData } = useContext(AuthContext)



    return (
        <div className='p-3'>
            <div className=' flex items-center rounded  py-2 px-4 lg:text-xl text-gray-900 font-bold  mb-2  w-full '>
                <h1>Employee's Details</h1>
            </div>
            <div className='h-[80%] flex flex-wrap  lg:gap-4 '>
                {userData.map((elem, idx) => {


                    return <div key={idx} className='flex flex-col  text-gray-800 rounded-xl bg-white border shadow border-blue-200 py-2  px-4 mb-2 lg:w-[20%]   w-full '>
                        <div className='flex  gap-3'>
                            <UserCircle2Icon className='h-12 w-12  text-sky-700  rounded-full' />

                            <div>
                                <h1 className='text-sm font-bold'>{elem.firstName}</h1>
                                <h2 className='text-sm'>{elem.email}</h2>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center mt-8 font-bold'>
                            <h1>OverAll Tasks</h1>
                        </div>

                        <div className=' relative flex justify-between item-center mt-2 rounded shadow font-semibold gap-3 p-2 bg-blue-100'>
                             <FilePlusCorner className='absolute text-blue-500' />
                            <h1 className='pl-8 '>New Task</h1>
                            <h1>{elem.taskCount.newTask}</h1>
                        </div>

                         <div className='flex relative justify-between item-center mt-2 rounded shadow font-semibold gap-3 p-2 bg-blue-100'>
                             <CircleCheckBig className='absolute text-emerald-500' />
                            <h1 className='pl-8'>Complted Task</h1>
                            <h1>{elem.taskCount.completedTask}</h1>
                        </div>

                         <div className='flex relative justify-between item-center mt-2 rounded shadow font-semibold gap-3 p-2 bg-blue-100'>
                              <CircleX className='absolute text-red-500' />
                            <h1 className='pl-8'>Failed Task</h1>
                            <h1>{elem.taskCount.failedTask}</h1>
                        </div>

                         <div className='flex relative  justify-between item-center mt-2 rounded shadow font-semibold gap-3 p-2 bg-blue-100'>
                             <SquareActivity className='absolute text-violet-500'/>
                            <h1 className='pl-8'>Accepted Task</h1>
                            <h1>{elem.taskCount.active}</h1>
                        </div>
                       <button className='bg-sky-200 p-1 mt-4 rounded font-bold'>User id {elem.id}</button>
                    </div>


                })}
            </div>
        </div>
    )
}

export default TaskStatus
