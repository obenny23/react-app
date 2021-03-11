import React from 'react';
import Task from './Task';

const Tasks = ({tasks, onDelete, onUpdate}) => {

    return(
        tasks.length > 0
        ?
        <div>
                <div>
                    {
                        tasks.map((task) => (<Task key={task.id} task = {task} 
                        onDelete={onDelete} onUpdate={onUpdate}/>)
                    )}
                </div>
            <br/><br/>
        </div>
        :
        <div>
            <p className="empty-sched" >No available schedules at this moment</p>
        </div>
    )
}

export default Tasks;