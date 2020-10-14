// import React from 'react';
import HooverLogo from '../images/HooverLogo.png';

import axios from 'axios'; 
import React,{Component} from 'react'; 
  
export default class RoombaInputs extends Component { 
   
  constructor(props) {
    super(props);
    this.state = { 
          // Initially, no file is selected 
          selectedFile: null,
          data: null
        }; 
}
componentDidMount(){
  console.log("Starting Up Roomba Inputs")
}
     
    // On file select (from the pop up) 
    onFileChange = event => { 
      event.preventDefault();
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = (event) => { 
      event.preventDefault();
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
      this.setState({
        data: formData,
       
      });
      // axios.post("api/uploadfile", formData); 
    }; 

    onExampleClick = (event) => {
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
      // this.setState({
      //   data: data,
       
      // });
      // console.log("data",this.state.data)
      this.props.onGridSubmit(data)
    }

   
     
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
           
          <div className="fileUploader"> 
            <div> 
              <button onClick={this.onExampleClick}>Example</button> 
            <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {this.fileData()} 
             
          <div>
            </div>
          {/* <button className='submitButton' onClick={this.props.onSubmit(this.state.data)} type='submit' form="roombaForm">
                <img className='submitButtonImage' src={HooverLogo} alt="Play game"/>
            </button> */}
          
            </div>
        </div> 
      ); 
    } 
  } 
 