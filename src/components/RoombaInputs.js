// import React from 'react';
// import HooverLogo from '../images/HooverLogo.png';

import axios from 'axios'; 
import React,{Component} from 'react'; 
  
export default class RoombaInputs extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      selectedFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
     
      return ( 
        <div > 
           
            <h3> 
              File Upload using React! 
            </h3> 
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 
  
//   export default App; 
// const RoombaInputs = (props) => {
//     return (
//         <div>
          
//         </div>
//     );

// };

// export default RoombaInputs;

{/* <div className="alignPageContent">
<div className="inline">
    <h3>How to play</h3>
    <div className='howToPlay'>
        <h5>1. Create your game to the right</h5>
        <h5>2. Click the Hoover logo when you are ready to play</h5>
        <h5>3. Grid will appear with direction buttons above to move Roomba</h5>
        <h5>4. Navigate Roomba into the dirt tile you placed</h5>
    </div>
</div>
<div className="inline">
    <form onSubmit={props.onSubmit} id="roombaForm">
        <h3>Room Dimensions</h3>
        <div className='numberInput'>
            <input type="number" name="width" min="1" placeholder="Grid width"
                   onChange={props.onChange} required/>
            <input type="number" name="length" min="1" placeholder="Grid length"
                   onChange={props.onChange} required/>
        </div>
        <h3>Dirt Patch</h3>
        <div className='numberInput'>
            <input type="number" name="x" min="0" max={props.grid.width - 1}
                   placeholder="Dirt x value" onChange={props.onChange}/>
            <input type="number" name="y" min="0" max={props.grid.length - 1}
                   placeholder="Dirt y value" onChange={props.onChange}/>
        </div>
        <h3>Roomba Start Tile</h3>
        <div className='numberInput'>
            <input type="number" name="x" min="0" max={props.grid.width - 1}
                   placeholder="Roomba x value" onChange={props.onChange} required/>
            <input type="number" name="y" min="0" max={props.grid.length - 1}
                   placeholder="Roomba y value" onChange={props.onChange} required/>
        </div>
    </form>
</div>
</div>
<button className='submitButton' type='submit' form="roombaForm">
<img className='submitButtonImage' src={HooverLogo} alt="Play game"/>
</button> */}