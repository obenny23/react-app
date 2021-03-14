const ZoomButton = ({onCreate, isNewTask}) => {

    return(
        <div>
            {isNewTask ?
                <button className="zoombtn" onClick={() => onCreate()}>Full<br/>Schedule</button>
                :
                <button className="zoombtn" onClick={() => onCreate()}>Create<br/>Meeting</button>
            }
        </div>
    )
};
export default ZoomButton;