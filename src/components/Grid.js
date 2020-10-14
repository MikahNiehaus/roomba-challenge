import React, { Component } from 'react';
import CleanTile from '../images/CleanTile.jpg';
import DirtyTile from '../images/DirtyTile.jpg';
import Roomba from '../images/Roomba.jpeg';
// import Tile from './Tile';

export default class Grid extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            roombaLocation: [1,1]
        
        };
    }
    componentDidMount(){
       
    //    this.props.setRoombaLocation([1,1]);
          console.log("Starting Up Grid",this.state.initialRoombaLocation)
          
    }

    startClick = (event) => {
        event.preventDefault();

        console.log("worked")

        this.setState({
            roombaLocation: [1,2]
          });
    }
  
    printGrid = () => {

      
             
        const data = {
            "roomDimensions": [10, 10],
            "initialRoombaLocation": [1, 1],
            "dirtLocations": [
              [1, 2],
              [3, 5],
              [5, 5],
              [7, 9]
            ],
            "drivingInstructions": ["N","E","E","N","N","N","E","E","S","W","S","S","S","S","S"  ]
          }
          
         

        console.log(data.roomDimensions[0])
        const hight = data.roomDimensions[0];
        const width = data.roomDimensions[1];
        const roombaLocation = this.state.roombaLocation;

        const dirtLocations = data.dirtLocations;
        const drivingInstructions = data.drivingInstructions;
        console.log("test",dirtLocations)
        let jsx = [];

        let i = 0;
        let x = 0;

        while (hight > i){
            while(width>x){
                 let gridNum = [i,x]
               
                if (roombaLocation.toString().includes(gridNum.toString())){
                    jsx.push(<img width="50" height="50" className={x} src={Roomba}/>);
                }
                else if (dirtLocations.toString().includes(gridNum.toString())){
                    jsx.push(<img width="50" height="50" className={x} src={DirtyTile}/>);
                    console.log("test")
                } else {
                    jsx.push(<img width="50" height="50" className={x} src={CleanTile}/>);

                }
               
                x+=1;
            }
            jsx.push(<div></div>)
            x=0;
            i += 1;
        }
        console.log("jsx",jsx)
        return jsx;
       
    };
   
    render() {
      

        return (
            <div>
                <center>
                <form onSubmit={this.startClick}>
               <input type="submit" style={{background: this.state.background}} value="Start"/>
                </form>
                {/* <button onClick={this.startClick()}>start</button> */}
                </center>
                <table>
                    <tbody>
                        {/* {this.printGrid()} */}
                        {this.printGrid().map(x => x)}
                    </tbody>
                </table>
            </div>
        )
    }
}

