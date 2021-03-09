
const Task = ({task, onDelete, onUpdate }) => {

    return (
        <div className="jaja">
            <div className="new-entr" onDoubleClick={() => onUpdate(task.id)}>
                <h3>{task.title}
                    <div style={{color : "red", cursor : 'pointer'}} onClick={() => onDelete(task.id)}>
                        Delete
                    </div>
                </h3>
                <p>{task.day}</p>
                    <a href={task.textInfor}>{task.textInfor}</a>
                {task.important && <p> important </p>}
            </div> 
        </div>
    )
}

export default Task;