import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='bg-red-50 border border-red-300 shadow-sm shrink-0 p-5 h-full rounded-xl w-[350px] lg:w-[400px]'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-gray-300 py-1 px-3 font-semibold  text-red-500 rounded text-sm'>{data.category}</h3>
                <h4 className='font-semibold text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='font-semibold text-2xl mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
            <div className='flex mt-5'>
                <button className=' bg-red-50  text-red-600 p-3 rounded-xl text-sm font-bold'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask
