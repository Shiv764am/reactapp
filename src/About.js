import React from 'react'
class About extends React.Component{
    constructor(){
        super();
        this.state = {
            name: 'Shivam',
            age:27
        }
    }
    componentDidMount(){
        console.warn("did mount");
    }
    componentDidUpdate(){
        alert('name is updated')
    }
    render(){
        return(
            <div>
                <h1>About us Component</h1>
                <h2>{this.state.name}</h2>
                <h3>{this.state.age}</h3>
                <button onClick={()=>{this.setState({name:'Shivam gupta'})}}>UpdateState</button>
            </div>
            );
    }
}

export default About;

// Life cycle method
// constructor(){

// }

// componentDidMount(){

// }

// componentDidUpdate(){

// }

// componentWillUnmount(){

// }