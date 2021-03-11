import AddTask from './AddTask'
import Tasks from './Tasks'

const Display = ({addTask, tasks, deleteTask, updateTask, newTask}) => {

    return (
        <div>
            {newTask 
                ? 
                <AddTask onAdd={addTask}/> 
                :  
                <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask}/>
                }
        </div>
    )
}

export default Display;