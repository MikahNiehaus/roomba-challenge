import React, { Component } from 'react';
import RoombaInputs from './RoombaInputs';

import './App.css'
import Grid from './Grid';

class App extends Component {
    constructor() {
        super();
        this.state = {
          data: {},
        };
    }
    componentDidMount(){
        console.log("Starting Up App")
    }
    handleSubmit = (data) =>{
        // event.preventDefault();
        console.log("set data")
           this.setState({
        data: data,
       
      });
    }
   

    render() {
        return (
            <div>
                <div className="header">
                    <span>Roomba</span>
                </div>
                 
                    <center>
                    <RoombaInputs
                        // onChange={this.handleChange}
                        onGridSubmit={this.handleSubmit}
                        // grid={this.state.grid}
                    /></center>
                    <Grid data={this.state.data}></Grid>
            </div>
        );
    }
}

export default App;