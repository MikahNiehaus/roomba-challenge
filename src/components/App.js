import React, { Component } from 'react';
import RoombaInputs from './RoombaInputs';
import CompassAndGridWrapper from './CompassAndGridWrapper';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            grid: {
                width: 0,
                length: 0
            },
            dirt: {
                x: '',
                y: ''
            },
            roomba: {
                x: 0,
                y: 0
            },
            submitButtonClicked: false
        };
    }

    coordinatesCheckIfMaxY = (y) => {
        return y !== this.state.grid.length;
    };

    coordinatesCheckIfMaxX = (x) => {
        return x !== this.state.grid.width;
    };

    coordinatesCheckIfZero = (xOrY) => {
        return xOrY > 0;
    };

    north = () => {
        const roomba = this.state.roomba;

        if(this.coordinatesCheckIfMaxY(roomba.y + 1)) {
            roomba["y"] += 1;
            this.setState({roomba}, this.tileCleaned());
        }
    };

    east = () => {
        const roomba = this.state.roomba;

        if(this.coordinatesCheckIfMaxX(roomba.x + 1)) {
            roomba["x"] += 1;
            this.setState({roomba}, this.tileCleaned());
        }
    };

    south = () => {
        const roomba = this.state.roomba;

        if(this.coordinatesCheckIfZero(roomba.y)) {
            roomba["y"] -= 1;
            this.setState({roomba}, this.tileCleaned());
        }
    };

    west = () => {
        const roomba = this.state.roomba;

        if(this.coordinatesCheckIfZero(roomba.x)) {
            roomba["x"] -= 1;
            this.setState({roomba}, this.tileCleaned());
        }
    };

    handleChange = (event) => {
        const {name, value, placeholder} = event.target;
        const grid = this.state.grid;
        const dirt = this.state.dirt;
        const roomba = this.state.roomba;

        if(placeholder.includes("Grid")) {
            grid[name] = parseInt(value, 10);

            this.setState({
                grid
            });
        }
        if(placeholder.includes("Dirt")) {
            dirt[name] = parseInt(value, 10);

            this.setState({
                dirt
            });
        }
        if(placeholder.includes("Roomba")) {
            roomba[name] = parseInt(value, 10);

            this.setState({
                roomba
            })
        }
    };

    handleSubmit = () => {
        this.tileCleaned();
            this.setState({
                submitButtonClicked: true
            });
    };

    tileCleaned() {
        if(JSON.stringify(this.state.roomba) === JSON.stringify(this.state.dirt)) {
            this.setState({
                dirt: "game over"
            })
        }
    }

    render() {
        return (
            <div>
                <div className="header">
                    <span>Roomba</span>
                </div>
                {this.state.submitButtonClicked ?
                    <CompassAndGridWrapper
                        appState={this.state}
                        north={this.north}
                        east={this.east}
                        south={this.south}
                        west={this.west}
                    /> :
                    <center>
                    <RoombaInputs
                        // onChange={this.handleChange}
                        // onSubmit={this.handleSubmit}
                        // grid={this.state.grid}
                    /></center>
                }
            </div>
        );
    }
}

export default App;