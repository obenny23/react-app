import React from 'react';
import '../style.css';

class VideoBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            path: this.props.path
        };

        this.handleShowDialog = this.handleShowDialog.bind(this)
    }

    handleShowDialog (){
      this.setState({ isOpen: !this.state.isOpen,
                    path: this.state.path });
    }
  
    render(){
    return (
        <div>
            <div className="vid_disp" onClick={this.handleShowDialog}>
                <iframe
                    title="vd"
                    src={this.state.path} 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    onLoad={this.handleShowDialog}
                />
            </div>

            {this.state.isOpen && (
                <div className="modal" style={{display:'block'}} onClick={this.handleShowDialog}>
            
              <iframe
                    title="vd"
                    src={this.state.path} 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    onClick={this.handleShowDialog}
                    style={{position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        cursor: 'pointer',
                        width: '75%',
                        height: '75%'
                    }

                    }
                />
        </div>
          )}
        </div>
      );
  }
}

export default VideoBox