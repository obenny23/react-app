import React,{useState} from 'react';
import EditTask from './EditTask';

const Task = ({task, onDelete, onUpdate}) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleClick = () => {     setIsEdit(!isEdit);     }

    function formatDate(date) {
        var month = date.slice(5,7);
        var day = date.slice(8,10);
        var year = date.slice(0,4);
        var hours = date.slice(11,13);
        var minutes = date.slice(14,16);
        var ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        var strTime = hours + ':' + minutes + ' ' + ampm;
        var disp = month + "/" + day + "/" + year + "\t\t" + strTime

        return (disp)
      }

      let niceDate = formatDate(task.day);

    return (
        <div>
            <br/>
            <div className={task.important ? "highlighted-entr" :"new-entr"}>
                <div className="btn-update" onClick={handleClick}>Update</div>
                <p className="task">{task.title}</p>
                <div className="delete" onClick={() => onDelete(task.id)}>Delete</div>
                <p className="info">{niceDate}</p>
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