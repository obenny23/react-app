const ZoomButton = ({onCreate}) => {

    return(
        <button className="zoombtn" onClick={() => onCreate()}>Create Meeting</button>
    )
};
export default ZoomButton;