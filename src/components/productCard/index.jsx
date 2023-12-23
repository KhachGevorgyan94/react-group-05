import React from "react";
import './style.scss'

class ProductCard extends React.Component {

    // constructor(props) {
    //     super();
    //     console.log(props)
    // }

    //  state,  this.setState()

    state = {
        stateCount: 0
    }

    count = 0

    counter = () => {
        this.count++
        this.setState({stateCount: ++this.state.stateCount})
    }


    render() {
        return <div className={'product-card G-flex-column gap-15 padding-10'}>
            {/*<div style={{backgroundImage:`url('${natureImage}')`}}/>*/}
            <img src={this.props.image} alt='ewrwerwer'/>
            <h3 className={`${this.props.isCheck ? "color-blue" : 'color-red'}`}
                style={{color: this.props.isCheck ? 'red' : 'blue'}}>{this.props.title ? this.props.title : '-'}</h3>
            {this.props.subTitle ? <p>{this.props.subTitle}</p> : null}
            <span>{this.props.description} </span>
            {/*<button onClick={(e)=>{*/}
            {/*    this.counter(e,'asdfiusahdf')*/}
            {/*}}>click me</button>*/}
            <p>count {this.count}</p>
            <p> stateCount {this.state.stateCount}</p>
            {console.log(this.count)}
            {console.log(this.state.stateCount,'this.state.stateCount')}
            <button onClick={this.counter}>click me</button>
            {/* (e)=>{} =  this.counter */}
        </div>
    }
}

export default ProductCard

//
// class testComponent extends React.Component {
//     render() {
//         return <div></div>
//     }
// }