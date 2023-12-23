import React from "react";
import './style.scss'

class TextBox extends React.Component {

    state = {
        hideDescription: false,
        isDarkMode:false
    }

    toggleHide = ()=>{
        this.setState({hideDescription:!this.state.hideDescription})
    }

    lightDarkMode = ()=>{
        this.setState({isDarkMode:!this.state.isDarkMode})
        // document.body
        document.body.classList.toggle('dark-mode')
    }


    render() {
        return <>
            <div className={`text-content padding-15 ${this.state.isDarkMode?'dark-mode':''}`}>
                <p>{this.props.title}</p>
                {!this.state.hideDescription?<p>{this.props.description}</p>: null}
                <button onClick={this.toggleHide}>click me</button>
                <br/>
                <button onClick={this.lightDarkMode}>{this.state.isDarkMode?'Light':'Dark'}</button>
            </div>
        </>
    }
}

export default TextBox