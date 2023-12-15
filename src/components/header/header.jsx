import React from "react";
    import './style.css'

class Header extends React.Component{

    render() {
        return  <header className={'header-block'}>
            <div>
                <a href="">LOGOG</a>
                <ul>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                </ul>
            </div>
           <div>
               <Box name={'Khachik'} age={30}/>
               <Box name={'Vanush'}/>
               <Box name={'Garik'}/>
               <Box name={'Anna'}/>
               <Box name={'Virab'}/>
           </div>
        </header>
    }
}

export default Header


class Box extends React.Component{
        constructor() {
            super();
        }

        render() {
            return <div>
                Number:
                <span> {this.props.name}</span>
                <strong>{this.props.age}</strong>
            </div>
        }
}



// class Car{
//     constructor(name,model) {
//     }
// }
//
// new Car('Mers','E350')

// function Car(name,model){
//
// }
//
// new Car('Mers','E350')