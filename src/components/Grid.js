import React, { Component } from 'react';
import CleanTile from '../images/CleanTile.jpg';
import DirtyTile from '../images/DirtyTile.jpg';
import Roomba from '../images/Roomba.jpeg';
// import Tile from './Tile';

export default class Grid extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            roombaLocation: [1,1],
            hit: 0,
            dirtLocations: [
              [1, 2],
              [3, 5],
              [5, 5],
              [7, 9]
            ],
            cleaned: 0
        
        };
    }
    componentDidMount(){
       
    //    this.props.setRoombaLocation([1,1]);
          console.log("Starting Up Grid",this.state.initialRoombaLocation)
          
    }

    startClick = (event) => {
        event.preventDefault();
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
        console.log("worked")
        let location = data.initialRoombaLocation;
        const drivingInstructions =  data.drivingInstructions;

        let save = []
        let i = 0;
        let hit = 0;
        while (drivingInstructions.length>i){
            switch(drivingInstructions[i]) {
                case "N":
                    if((location[0] - 1) == 0){
                      hit += 1;
                    //   location[0]+=1
                    }else{
                    location[0] -= 1
                    save.push(location)
                    }
                    
                  break;
                case "S":
                    if((location[0] + 1) == data.roomDimensions[1]){
                        hit += 1;
                        
                      }else{    
                        location[0] += 1            
                      save.push(location)
                      }
                  break;
                   case "W":
                    if((location[1] - 1) < 1){
                        hit += 1;
                      }else{
                        location[1] -= 1
                      save.push(location)
                      }
                  break;
                  case "E":
                    if((location[1] + 1) == data.roomDimensions[1]){
                        hit += 1;
                      }else{
                        location[1] += 1
                      save.push(location)
                      }
                    break;
                default:
                  // code block
              }
              // let dirtLocations = this.state.dirtLocations
              setTimeout(this.myFunction(location,hit), i * 1000)
           
         

            i+=1;
        }
    
    }

    myFunction(location,hit){
      console.log("time")
   
      this.setState({
        roombaLocation: location,
        hit: hit
      }); 
      this.printGrid(location)
    }



  
 CleanTile(roombaLocation){
  const dirtLocations = this.state.dirtLocations;
console.log("dirtLocations",dirtLocations.length)
let i = 0;
let newDirtLocations = []
while(dirtLocations.length>i){
  console.log("if",dirtLocations[i].toString(),roombaLocation.toString())
  if(dirtLocations[i].toString()==roombaLocation.toString()){
    console.log("remove",dirtLocations[i])
  }
  else{
    console.log("add",dirtLocations[i])
    newDirtLocations.push(dirtLocations[i]);
  }
  i+=1;
}
this.setState({
  dirtLocations: newDirtLocations
})
console.log("dirtLocations",newDirtLocations)

return newDirtLocations
 }

  
    printGrid = (roombaLocation = this.state.roombaLocation) => {
// console.log("printGrid",roombaLocation)
      
             
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
        // const ;

        let dirtLocations = this.state.dirtLocations;
        // console.log("test",dirtLocations)
        let jsx = [];

        let i = 0;
        let x = 0;

        while (hight > i){
            while(width > x){
                 let gridNum = [i+1,x+1]
                 
                 if (dirtLocations.toString().includes(roombaLocation.toString())){
                  // console.log("Cleaned",dirtLocations)
                  // dirtLocations[0].splice(roombaLocation)
                  // console.log("CleanedX",dirtLocations)
                  dirtLocations = this.CleanTile(roombaLocation)
                  this.setState({
                   dirtLocations: dirtLocations,
                   cleaned: this.state.cleaned+1
                 });
                 
                }
                
                if (roombaLocation.toString().includes(gridNum.toString())){
                    jsx.push(<img width="50" height="50" className={x} src={Roomba}/>);
                }
                else if (dirtLocations.toString().includes(gridNum.toString())){
                    jsx.push(<img width="50" height="50" className={x} src={DirtyTile}/>);
                } else {
                    jsx.push(<img width="50" height="50" className={x} src={CleanTile}/>);

                }
               
                x+=1;
            }
            jsx.push(<div></div>)
            x=0;
            i += 1;
        }
       // console.log("cleaned",this.state.cleaned,"hit",this.state.hit)
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
                        {this.printGrid().map(x => x)}
                    </tbody>
                </table>
            </div>
        )
    }
}

