import React from 'react'
import AcceptTask from './AcceptTask'
import ComplteTask from './ComplteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='lg:h-[58%]  overflow-x-auto flex  lg:flex-nowrap flex-wrap p-3 lg:p-10 gap-4 py-7 items-center justify-center lg:justify-start lg:w-full  '>
            {data.tasks.map((e, idx) => {
                if (e.active) {
                    return <AcceptTask key={idx} data={e} empdata={data} />
                }
                if (e.newTask) {
                    return <NewTask key={idx} data={e} empdata={data} />
                }
                if (e.completedTask) {
                    return <ComplteTask key={idx} data={e} empdata={data} />
                }
                if (e.failedTask) {
                    return <FailedTask key={idx} data={e} empdata={data} />
                }
            })}


        </div>
    )
}

export default TaskList
