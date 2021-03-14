import {useState} from 'react';

const EditTask = ({task, onUpdate, onChange}) => {
    const currentDate = new Date();

    const [title, setTitle] = useState(task.title)
    const [day, setDay] = useState(task.day)
    const [textInfor, setTextInfor] = useState(task.textInfor)
    const [important, setImportant] = useState(task.important)

    const handleValidation = () => {
        let isValidLink = true;
        let isValidDate = true;

        let year = currentDate.getFullYear()
        let date = currentDate.getDate()
        let month = currentDate.getMonth()+1


        if (day.slice(0,4) == year){
            if (day.slice(5,7) == month){
                if (day.slice(8,10) > date){
                    isValidDate = true;
                }
                else{
                    isValidDate = false;
                }
            }
            else if (day.slice(5,7) < month) {  isValidDate = false;    }
        } 
        else if (day.slice(0,4) < year) {   isValidDate = false;    }


        if (!isValidDate){
            window.alert("Must enter a future date.")
        }

        if (textInfor.indexOf("zoom") === -1){
            isValidLink = false;
            window.alert("Please enter a valid zoom link.");
        }

        return (isValidDate && isValidLink)
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
       
        let valid = handleValidation();

        if (valid){
            onUpdate(task.id,title, day, textInfor, important);
            onChange();
        }
    }

    return (
        <div className="edit-frm">
            <form onSubmit={onSubmit}>
                <div className="form-cntrl">
                    <label>Title</label><br/>  
                    <input style={{ height: '20px', fontSize:'16px'}} required maxlength='30'
                        type="text" size="50" value={title}
                        onChange={(e) => setTitle(e.target.value)}/>  
                </div>
                <div className="space"/>
                <div className="form-cntrl">
                    <label>Date</label><br/>
                    <input style={{height: '20px'}} required
                        type="datetime-local" size="50" value= {day}
                        onChange={(e) => setDay(e.target.value)}/>  
                </div>
                <div className="space"/>
                <div className="form-cntrl">
                    <label>Zoom Link</label><br/>
                    <input style={{ height: '20px', fontSize:'16px'}} required
                        type="url" size="50" value={textInfor}
                        onChange={(e) => setTextInfor(e.target.value)}/>
                </div>
                <div className="space"/>
                <div className="form-cntrl form-cntrl-chk">
                    <label>Important</label>
                    <input style={{height : '24px', marginLeft : '15%', alignContent : 'center'}} type="checkbox" checked={important} value={important}
                        onChange={(e) => setImportant(e.currentTarget.checked)}/>
                </div>
                <br/>
                <input type="submit" value="Update Meeting" className="upd-btn"/>
            </form>
        </div>
    )
}

export default EditTask;