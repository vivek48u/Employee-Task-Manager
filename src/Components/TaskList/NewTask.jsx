import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider';
  

const NewTask = ({ data ,empdata}) => {
 const { userData, setUserData, adminData, setuserData } = useContext(AuthContext)
    const acceptbtn = () => {
        const task = empdata.tasks.find((t) => {
            return t.taskTitle === data.taskTitle;
        });

        if (task) {
            task.active = true;
            task.newTask = false;
            task.completedTask = false;
            task.failedTask = false;

            empdata.taskCount.active++;
            empdata.taskCount.newTask--;

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
    <div className='bg-yellow-50 border border-yellow-300 shadow-sm shrink-0 p-5 h-full rounded-xl w-[350px] lg:w-[400px]'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-gray-300 py-1 px-3 font-semibold  text-red-500 rounded text-sm'>{data.category}</h3>
            <h4 className='font-semibold text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='font-semibold text-2xl mt-5'>{data.taskTitle}</h2>
        <p className='text-sm mt-3'>{data.taskDescription}</p>
        <div className='flex justify-center mt-5'>
            <button onClick={() => {
                acceptbtn()
            }}

                className=' bg-yellow-300 cursor-pointer  text-gray-800 px-8 py-2.5 rounded border active:scale-95 border-yellow-200 shadow-md text-sm font-bold'>Accept Task</button>
        </div>
    </div>
)
}

export default NewTask
