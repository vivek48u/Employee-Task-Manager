import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
 
 
 
 
  
  return (
    <div className=' bg-[#f3f4f6] lg:h-screen h-full'>
      
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskNumber data={props.data}/>
        <TaskList data={props.data} />
     
    </div>
  )
}

export default EmployeeDashboard
