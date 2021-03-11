
const Task = ({task, onDelete, onUpdate}) => {

    return (
        <div>
            <br/>
            <div className={task.important ? "highlighted-entr" :"new-entr"}>
                <div className="btn-update" onClick={() => onUpdate(task.id)}>Update</div>
                <p className="task">{task.title}</p>
                <p className="info">{task.day}</p>
                <div className="delete" onClick={() => onDelete(task.id)}>Delete</div>
                <a className="info" href={task.textInfor}>{task.textInfor}</a>
            </div> 
        </div>
    )
}

export default Task;