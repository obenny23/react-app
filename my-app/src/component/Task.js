import React,{useState} from 'react';
import EditTask from './EditTask';

const Task = ({task, onDelete, onUpdate}) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleClick = () => {     setIsEdit(!isEdit);     }

    return (
        <div>
            <br/>
            <div className={task.important ? "highlighted-entr" :"new-entr"}>
                <div className="btn-update" onClick={handleClick}>Update</div>
                <p className="task">{task.title}</p>
                <div className="delete" onClick={() => onDelete(task.id)}>Delete</div>
                <p className="info">{task.day}</p>
                <a className="url-info" href={task.textInfor}>{task.textInfor}</a>
            </div> 
            <br/>
            {isEdit &&
                <EditTask task={task} onUpdate={onUpdate} onChange={handleClick}/>
            }
        </div>
    )
}

export default Task;