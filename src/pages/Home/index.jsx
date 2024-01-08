import React from "react";

class Home extends React.Component {
    state = {
        postList: [],
        counter: 0,
        loading: false,
    }

    constructor() {
        super();

        console.log('1 constructor')
    }
    counterInterval = null

    componentDidMount() {
        this.getData()
        console.log('3 componentDidMount')
       this.counterInterval =  setInterval(()=>{
            this.setState({counter: this.state.counter + 1})
            console.log(this.state.counter)
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.counterInterval)
        console.log('5 componentWillUnmount')
        document.removeEventListener()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('4 componentDidUpdate')
        console.log(this.state.counter)
        console.log(prevState, 'prevState')
    }


    getData = () => {

        this.setState({loading:true}, ()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => {
                    this.setState({postList: json, loading:false})
                    // console.log(json)
                })
        })
    }

    clickCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }


    render() {
        return <div>
            {console.log('2 render')}
            <h1>Hello000 Home Page</h1>
            <button onClick={this.clickCounter}> click me</button>
            <p style={{marginLeft: '40px'}}>{this.state.counter}</p>
            {!this.state.loading && this.state.postList.length && this.state.postList.map((item, index) => {
                return <div key={index}>
                    <p>{item.title}</p>
                    <p>{item.body}</p>
                </div>
            })}

            {this.state.loading? <p>Loading .....</p>: null}
        </div>
    }
}

export default Home