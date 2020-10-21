import React, { Component } from 'react';
import CleanTile from '../images/CleanTile.jpg';
import DirtyTile from '../images/DirtyTile.jpg';
import Roomba from '../images/Roomba.jpeg';
import JsonData from './JsonData.json'
export default class Grid extends Component  {
    constructor(props) {
      super(props);
      this.state = {
          roombaLocation: [0, 0],
          hit: 0,
          dirtLocations: [
            [0, 0]
          ],
          cleaned: 0,
          drivingInstructions:  ["" ],
          roomDimensions: [0, 0]
      
      };
    }


    componentDidMount() {
      const data = JsonData;
      this.setState({
        dirtLocations: data.dirtLocations,
        roombaLocation: data.initialRoombaLocation,
        drivingInstructions: data.drivingInstructions,
        roomDimensions: data.roomDimensions
      });
      // this.printGrid()
      console.log("JsonData",JsonData)
    }


    

    startClick = (event) => {
        event.preventDefault();
       
        let location= []
        location = this.state.roombaLocation;
        const drivingInstructions =  this.state.drivingInstructions;
        const roomDimension = this.state.roomDimensions
        console.log("worked",location)
        let i = 0;
        let hit = 0;
        let myGrid = this;
while (drivingInstructions.length>i) { 
  task(i); 
   i+=1; 
} 
function task(i) { 
  setTimeout(function() { 
    switch(drivingInstructions[i]) {
      case "N":
          if((location[0] - 1) == 0){
            hit += 1;
          }else{
           location[0] -= 1
           console.log("new location",location)
          }
          
        break;
      case "S":
          if((location[0] ) == roomDimension[0]){
              hit += 1;
            }else{    
              location[0] += 1     
           console.log("new location",location)

            }
        break;
         case "W":
          if((location[1] - 1) < 1){
              hit += 1;
            }else{
              location[1] -= 1
           console.log("new location",location)

            }
        break;
        case "E":
          if((location[1] ) == roomDimension[1]){
              hit += 1;
            }else{
              location[1] += 1
           console.log("new location",location)

            }
          break;
      default:
        console.log("Data not recognized"); 
    } 
    console.log("update",i,location, drivingInstructions[i],roomDimension); 
    
    myGrid.setState({
      roombaLocation: location,
      hit: hit
    }); 
  //  myGrid.printGrid(location);
  }, 1000 * i); 
} 
    
    }




  
 CleanTile(roombaLocation){
  const dirtLocations = this.state.dirtLocations;
//console.log("dirtLocations",dirtLocations.length)
let i = 0;
let newDirtLocations = []
while(dirtLocations.length>i){
  //console.log("if",dirtLocations[i].toString(),roombaLocation.toString())
  if(dirtLocations[i].toString()==roombaLocation.toString()){
    //console.log("remove",dirtLocations[i])
  }
  else{
    //console.log("add",dirtLocations[i])
    newDirtLocations.push(dirtLocations[i]);
  }
  i+=1;
}
this.setState({
  dirtLocations: newDirtLocations
})

return newDirtLocations
 }



 includesLocation = (dirtLocations,gridNum) => {
       let bool = false
       let i = 0;
        while (dirtLocations.length>i){
         // console.log("!!!!",dirtLocations[i].toString(),gridNum.toString())
          if(dirtLocations[i].toString().includes(gridNum.toString())){
            bool = true;
              }
          i++;
        }
        return bool;
      
 }

  
    printGrid = () => {
       console.log("print Grid")
    
        let roombaLocation = this.state.roombaLocation
        let jsx = [];

         if (roombaLocation!=null){

        //console.log(this.state)
        const hight = this.state.roomDimensions[0];
        const width = this.state.roomDimensions[1];
        // const ;

        let dirtLocations = this.state.dirtLocations;
        

        let i = 0;
        let x = 0;

        while (hight > i){
            while(width > x){
                 let gridNum = [i+1,x+1]
                 if (dirtLocations.toString().includes(roombaLocation.toString())){
                  dirtLocations = this.CleanTile(roombaLocation)
                  this.setState({
                   dirtLocations: dirtLocations,
                   cleaned: this.state.cleaned+1
                 });
                 
                }
                
                if (roombaLocation.toString().includes(gridNum.toString())){
                    jsx.push(<img width="50" height="50" className={x} src={Roomba}/>);
                }
                else if (this.includesLocation(dirtLocations,gridNum)===true){
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
        return jsx;
      }else{
        jsx.push(<div></div>)
        jsx.push(<h1>add json</h1>)
        return jsx
      }
    };
   
    render() {
      

        return (
            <div>
                <center>
                <form onSubmit={this.startClick}>
               
               <input type="submit" style={{background: this.state.background}} value="Start"/>
                </form>
                </center>
                <right><h1>Hit = {this.state.hit}</h1></right>
                <right><h1>Cleaned = {this.state.cleaned}</h1></right>
               
                <table>
                    <tbody>
                        {this.printGrid().map(x => x)}
                    </tbody>
                </table>
            </div>
        )
    }
}

