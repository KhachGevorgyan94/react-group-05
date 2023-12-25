import React from "react";
import Text from "./components/Text";
import Modal from "./components/modal";

class App extends React.Component {

    state = {
        isOpenModal: false
    }

    openModal = ()=>{
        this.setState({isOpenModal:true})
    }
    closeModal = ()=>{
        this.setState({isOpenModal:false})
    }

    render() {
        return <div className={'G-flex-column G-center gap-15'}>
            <button onClick={this.openModal}>open modal</button>
            {this.state.isOpenModal ? <Modal close={this.closeModal}>
                as;lkjdfha sljkhdfa;k h
            </Modal> : null}

            
        </div>
    }

}

export default App

