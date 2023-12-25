import React from "react";
import './style.scss'
class Text extends React.Component {

    // this.props.children
    render() {
        return <div>
            <p className={`${this.props.isEllipsis?'P-text-ellipsis':''}`} title={this.props.text} style={{
                color: this.props.color,
                fontSize: this.props.size + 'px',
                fontWeight:this.props.weight
            }}>{this.props.text}</p>
            {this.props.children}
        </div>
    }
}

export default Text