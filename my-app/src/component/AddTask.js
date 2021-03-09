import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [link, setLink] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({title, day, important})
        setTitle('')
        setDay('')
        setLink('')
        setImportant(false)
    }

    return (
        <form  onSubmit={onSubmit}>
            <div className="form-cntrl">
                <label>Meeting</label><br/>  
                <input type="text" placeholder="Add Task" value={title}
                    onChange={(e) => setTitle(e.target.value)}/>  
            </div>
            <br/>
            <div className="form-cntrl">
                <label>Date</label><br/>
                <input type="datetime-local" value= {day}
                    onChange={(e) => setDay(e.target.value)}/>  
            </div>
            <br/>
            <div className="form-cntrl">
                <label>Zoom Link</label><br/>
                <input type="url" placeholder="Link to Zoom Meeting" value={link}
                    onChange={(e) => setLink(e.target.value)}/>
            </div>
            <br/>
            <div className="form-cntrl form-cntrl-chk">
                <label>Important</label>
                <input type="checkbox" checked={important} value={important}
                    onChange={(e) => setImportant(e.currentTarget.checked)}/>
            </div>
            <br/>
            <input type="submit" value="Save" className="btn btn-block"/>
            </form>
    )
}

export default AddTask;