import React from "react";
import './style.scss'

class ProductCard extends React.Component {

    // constructor(props) {
    //     super();
    //     console.log(props)
    // }


    render() {
        return <div className={'product-card G-flex-column gap-15 padding-10'}>
            {/*<div style={{backgroundImage:`url('${natureImage}')`}}/>*/}
            <img src={this.props.image} alt='ewrwerwer'/>
            <h3  className={`${this.props.isCheck?"color-blue":'color-red'}`} style={{color: this.props.isCheck?'red':'blue'}}>{this.props.title ? this.props.title : '-'}</h3>
            {this.props.subTitle?<p>{this.props.subTitle}</p>: null}
            <span>{this.props.description} </span>
        </div>
    }
}

export default ProductCard


class testComponent extends React.Component {
    render() {
        return <div></div>
    }
}