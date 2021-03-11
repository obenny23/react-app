import {useState} from 'react';

const AddTask = ({onAdd}) => {
    const currentDate = new Date();

    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [textInfor, setTextInfor] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        let isValidLink = true;
        let isValidDate = true;

        let year = currentDate.getFullYear()
        let date = currentDate.getDate()
        let month = currentDate.getMonth()+1
/*
        let hrs = currentDate.getHours()
        let mins = currentDate.getMinutes()
        let secs = currentDate.getSeconds()
*/

        if (textInfor.indexOf("zoom") === -1){
            console.log(false)
            isValidLink = false;
            window.alert("Please enter a valid zoom link url.");
        }

        if (day.slice(0,4) == year){
            if (day.slice(5,7) == month){
                if (day.slice(8,10) >= date){
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

        if (isValidLink && isValidDate){
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
                        type="text" placeholder="Add Task" size="50" value={title}
                        onChange={(e) => setTitle(e.target.value)}/>  
                </div>
                <br/>
                <div className="form-cntrl">
                    <label>Date</label><br/>
                    <input style={{height: '24px'}} required
                        type="datetime-local" size="50" value= {day}
                        onChange={(e) => setDay(e.target.value)}/>  
                </div>
                <br/>
                <div className="form-cntrl">
                    <label>Zoom Link</label><br/>
                    <input style={{ height: '24px', fontSize:'16px'}} required
                        type="url" placeholder="Link to Zoom Meeting" size="40" value={textInfor}
                        onChange={(e) => setTextInfor(e.target.value)}/>
                </div>
                <br/>
                <div className="form-cntrl form-cntrl-chk">
                    <label>Important</label>
                    <input style={{height : '24px', marginLeft : '15%', alignContent : 'center'}} type="checkbox" checked={important} value={important}
                        onChange={(e) => setImportant(e.currentTarget.checked)}/>
                </div>
                <br/>
                <input style={{ fontSize:'16px',
                            paddingTop : '12px',
                            paddingBottom : '12px',
                            color : 'white', 
                            width :'90%', 
                            marginLeft : '5%',
                            marginRight : '5%',
                            textAlign :'center', 
                            backgroundColor : 'black',
                            border : 'none',
                            borderRadius: '5px',
                            letterSpacing : '0.6px',
                            justifyContent : 'center'
                        }} 
                            type="submit" value="Save Meeting" className="btn btn-block"/>
            </form>
        </div>
    )
}

export default AddTask;