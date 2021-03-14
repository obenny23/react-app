import AddTask from './AddTask'
import Tasks from './Tasks'

const Display = ({onAdd, tasks, onDelete, onUpdate, isNewTask}) => {

    
    return (
        <div>
            {isNewTask
                ? 
                <div>
                    <br/>
                    <AddTask onAdd={onAdd}/>
                    <br/>
                </div> 
                :  
                <Tasks tasks={tasks} onDelete={onDelete} onUpdate={onUpdate}/>
                }
        </div>
    )
}

export default Display;