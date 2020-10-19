import React, { Component } from 'react';
import CleanTile from '../images/CleanTile.jpg';
import DirtyTile from '../images/DirtyTile.jpg';
import Roomba from '../images/Roomba.jpeg';
// import Tile from './Tile';

export default class Grid extends Component  {
    constructor(props) {
      super(props);
      this.state = {
          roombaLocation: [1, 1],
          hit: 0,
          dirtLocations: [
            [1, 2],
            [3, 5],
            [5, 5],
            [7, 9] 
          ],
          cleaned: 0,
          drivingInstructions:  ["N","E","E","N","N","N","E","E","S","W","S","S","S","S","S"  ],
          roomDimensions: [10, 10]
      
      };
    }
    componentDidMount(){
      
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
          this.setState({
            dirtLocations: data.dirtLocations,
            roombaLocation: data.initialRoombaLocation,
            drivingInstructions: data.drivingInstructions,
            roomDimensions: data.roomDimensions
          });
          console.log("Starting Up Grid",this.state)
        
    }

    startClick = (event) => {
        event.preventDefault();
       
        let location= []
        location = this.state.roombaLocation;
        const drivingInstructions =  this.state.drivingInstructions;
        console.log("worked",location)
        let save = []
        let i = 0;
        let hit = 0;
        while (drivingInstructions.length>i){
            switch(drivingInstructions[i]) {
                case "N":
                    if((location[0] - 1) == 0){
                      hit += 1;
                    }else{
                    location[0] -= 1
                    save.push(location)
                    }
                    
                  break;
                case "S":
                    if((location[0] + 1) == this.state.roomDimensions[1]){
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
                    if((location[1] + 1) == this.state.roomDimensions[1]){
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
              // setTimeout(this.myFunction(location,hit), (1+i) * 1000)
        //       setTimeout(function(){ 
        //         console.log("update"); 
        //       this.setState({
        //         roombaLocation: location,
        //         hit: hit
        //       }); 
        //        this.printGrid(location);
        //       }, (1+i) * 1000);

        //  console.log("time",(1+i) * 1000)


         this.change = setTimeout(() => {
          console.log("update"); 
              this.setState({
                roombaLocation: location,
                hit: hit
              }); 
               this.printGrid(location);
        }, (1+i) * 1000)

            i+=1;
        }
    
    }

    myFunction(location,hit){
      //console.log("time")
   
      // this.setState({
      //   roombaLocation: location,
      //   hit: hit
      // }); 
      //  this.printGrid(location)
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
//console.log("dirtLocations",newDirtLocations)

return newDirtLocations
 }

  
    printGrid = () => {
       console.log("printGrid")
        // const data = {
        //     "roomDimensions": [10, 10],
        //     "initialRoombaLocation": [1, 1],
        //     "dirtLocations": [
        //       [1, 2],
        //       [3, 5],
        //       [5, 5],
        //       [7, 9]
        //     ],
        //     "drivingInstructions": ["N","E","E","N","N","N","E","E","S","W","S","S","S","S","S"  ]
        //   }
        let roombaLocation = this.state.roombaLocation
        let jsx = [];

         if (roombaLocation!=null){

        //console.log(this.state)
        const hight = this.state.roomDimensions[0];
        const width = this.state.roomDimensions[1];
        // const ;

        let dirtLocations = this.state.dirtLocations;
        // //console.log("test",dirtLocations)

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
       // //console.log("cleaned",this.state.cleaned,"hit",this.state.hit)
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

