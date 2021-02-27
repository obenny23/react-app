import React from 'react';
import '../style.css';

class ImageBox extends React.Component {
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
            <div className="img_disp">
                <img
                    src={this.state.path}
                    onClick={this.handleShowDialog}
                    alt=""
                />
            </div>

            {this.state.isOpen && (
                <div className="modal" style={{display:'block'}} onClick={this.handleShowDialog}>

                <img
                className="img_path"
                src={this.props.path}
                alt=""
                style={{position: 'fixed', 
                top: '50%', 
                left: '50%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                width: 'auto',
                height: '90%',
                zIndex: "2"}}
              />
              </div>
        
          )}
        </div>
      );
  }
}

export default ImageBox