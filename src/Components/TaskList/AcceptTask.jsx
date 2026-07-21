import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'

const AcceptTask = ({ data,empdata}) => {
     const { userData, setUserData, adminData, setuserData } = useContext(AuthContext)



   const complete = () => {

    const task = empdata.tasks.find((t) => {
        return t.taskTitle === data.taskTitle;
    });

    if (task) {
        task.active = false;
        task.newTask = false;
        task.completedTask = true;
        task.failedTask = false;

        empdata.taskCount.active--;
        empdata.taskCount.completedTask++;

        const updatedEmployees = userData.map((emp) => {
            if (emp.id === empdata.id) {
                return empdata;
            }
            return emp;
        });

        setUserData(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }
}

  const faildebtn =()=>{
     const task = empdata.tasks.find((t) => {
        return t.taskTitle === data.taskTitle;
    });

    if (task) {
        task.active = false;
        task.newTask = false;
        task.completedTask = false;
        task.failedTask = true;

        empdata.taskCount.active--;
        empdata.taskCount.failedTask++;

        const updatedEmployees = userData.map((emp) => {
            if (emp.id === empdata.id) {
                return empdata;
            }
            return emp;
        });

        setUserData(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }
  }

    return (
        <div className='bg-violet-50 border border-violet-300 shadow-sm shrink-0 p-5 h-full  rounded-xl '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-gray-300 py-1 px-3 font-semibold  text-red-500 rounded text-sm'>{data.category}</h3>
                <h4 className=' font-semibold text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='font-semibold text-2xl mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-3'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button onClick={(e) => {
                    complete(e)
                }}
                    className=' bg-green-400 cursor-pointer  text-gray-800 px-8 py-2.5 rounded border active:scale-95 border-green-200 shadow-md text-sm font-bold'>Mark as Complted</button>
                <button onClick={()=>{
                    faildebtn()
                }}
                
                className=' bg-red-400 cursor-pointer  text-gray-800 px-8 py-2.5 rounded border active:scale-95 border-red-200 shadow-md text-sm font-bold'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
