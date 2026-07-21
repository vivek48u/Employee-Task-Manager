import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'
import { Activity, ActivitySquare, CircleAlertIcon, CircleCheck, CrossIcon, FilePlusCorner, LucideActivitySquare, SquareCheckBig } from 'lucide-react'


const TaskNumber = ({ data }) => {
  const { userData, setUserData, adminData, setuserData } = useContext(AuthContext)




  return (

    <div className=' flex lg:flex-nowrap rounded-xl flex-wrap p-5 justify-between gap-4  '>


      <div className=' relative w-[43%]  py-6 px-9 bg-yellow-50 border border-yellow-200 shadow-md  rounded-xl'>
      <FilePlusCorner 
          className="absolute lg:top-5 bottom-5 right-2 h-8 w-8 lg:h-20 lg:w-20 text-yellow-400 rounded   "
        />
        <h3 className='font-bold text-xl text-gray-700 '>New Task</h3>
        <h2 className='text-4xl text-gray-700 mt-2 font-bold'>{data.taskCount.newTask}</h2>
        

      </div>


      <div className=' relative w-[43%] py-6 px-9 bg-green-50 border border-emerald-200 shadow-md  rounded-xl'>
         <SquareCheckBig className='absolute lg:top-5 bottom-5 right-2 h-8 w-8 lg:h-20 lg:w-20 text-emerald-500 rounded ' />
         <h3 className='font-bold text-gray-700 text-xl'>Complted Task</h3>
        <h2 className='text-3xl text-gray-700 mt-2 font-bold'>{data.taskCount.completedTask}</h2>
        
      </div>

      <div className='relative w-[43%] py-6 px-9 bg-red-50 border border-red-200 shadow-md  rounded-xl'>
        <CircleAlertIcon className='absolute lg:top-5 bottom-5 h-8 w-8 right-2 lg:h-20 lg:w-20 text-red-500 rounded '/>
        <h3 className='font-bold text-gray-700 text-xl'>Failed Task</h3>
        <h2 className='text-3xl text-gray-700 mt-2 font-bold'>{data.taskCount.failedTask}</h2>
        
      </div>

      <div className=' relative w-[43%]  py-6 px-9 bg-violet-50 border border-violet-200 shadow-md  rounded-xl'>
        <Activity className='absolute lg:top-5 bottom-5 right-2 h-8 w-8 lg:h-20 lg:w-20 text-violet-500 rounded ' />
        <h3 className='font-bold text-gray-700 text-xl'>Accepted Task</h3>
        <h2 className='text-3xl text-gray-700  font-bold'>{data.taskCount.active}</h2>
        
      </div>
    </div>
  )
}

export default TaskNumber
