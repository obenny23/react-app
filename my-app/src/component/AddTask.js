import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const currentDate = new Date();

    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [textInfor, setTextInfor] = useState('')
    const [important, setImportant] = useState(false)

    const handleValidation = () => {
        let isValidLink = false;
        let isValidDate = false;

        let year = currentDate.getFullYear()
        let date = currentDate.getDate()
        let month = currentDate.getMonth()+1


        //Date Verification
        if (day.slice(0,4) > year){
            isValidDate = true;
        }
        else if (day.slice(0,4) == year){
            if (day.slice(5,7) > month){
                isValidDate = true;
            }
            else if (day.slice(5,7) == month) {  
                if (day.slice(8,10) > date){
                    isValidDate = true;
                }
            }
        } 


        if (!isValidDate){
            window.alert("Must enter a future date.")
        }
    
    // Zoom URL verification

        if (textInfor.indexOf("zoom") !== -1){
            isValidLink = true;
        }
        else{
            window.alert("Please enter a valid zoom link.");
        }

        return(isValidDate && isValidLink)
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
       
        let valid = handleValidation();

        if (valid){
            onAdd({title, day, textInfor, important})
            setTitle('')
            setDay('')
            setTextInfor('')
            setImportant(false)
        }
    }

    return (
        <div className="frm">
            <form onSubmit={onSubmit}>
                <div className="form-cntrl">
                    <label>Title</label><br/>  
                    <input style={{height: '24px', fontSize:'16px'}} required maxlength='30'
                        type="text" placeholder="Add Task" size="60" value={title}
                        onChange={(e) => setTitle(e.target.value)}/>  
                </div>
                <br/>
                <div className="form-cntrl">
                    <label>Date</label><br/>
                    <input style={{height: '24px'}} required
                        type="datetime-local"  value= {day}
                        onChange={(e) => setDay(e.target.value)}/>  
                </div>
                <br/>
                <div className="form-cntrl">
                    <label>Zoom Link</label><br/>
                    <input style={{ height: '24px', fontSize:'16px'}} required
                        type="url" placeholder="Link to Zoom Meeting" size="60" value={textInfor}
                        onChange={(e) => setTextInfor(e.target.value)}/>
                </div>
                <br/>
                <div className="form-cntrl form-cntrl-chk">
                    <label>Important</label>
                    <input style={{height : '24px', marginLeft : '15%', alignContent : 'center'}} type="checkbox" checked={important} value={important}
                        onChange={(e) => setImportant(e.currentTarget.checked)}/>
                </div>
                <br/>
                <input type="submit" value="Save Meeting" className="save-btn"/>
            </form>
        </div>
    )
}

export default AddTask;