import React from "react";
import './style.scss'
class Modal extends React.Component{
    render() {
        return <div className='modal-container' >
            <span className='modal-bg' onClick={this.props.close}/>
            <div className='modal-body'>
                {this.props.children}
            </div>
        </div>
    }
}

export default Modal