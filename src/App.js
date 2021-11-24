import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank.js';
import SignIn from './components/SignIn/SignIn.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import './App.css';
import Particles from 'react-particles-js';
import API_KEY from './apiKeys';
import Clarifai from 'clarifai';


//Initailize a new clarifai app instance 
const app = new Clarifai.App({
  apiKey: `${API_KEY}`
});


const ParticleOptions = {
  "particles": {
    "number": {
      "value": 50
    },
    "size": {
      "value": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      imageURL: '',
      box: {}
    }
  }
  calculateFaceLocation = (data) => {
    //function to calculate  face region 
    const ClarifaiFace = data;

    //Dom manipulation 
    const image = document.getElementById('inputimage');

    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: ClarifaiFace.left_col * width,
      topRow: ClarifaiFace.top_row * height,
      rightCol: width - (ClarifaiFace.right_col * width),
      bottomRow: height - (ClarifaiFace.bottom_row * height)
    }
  }

  //Display method to set the box state
  displayFaceBox = (box) => {
    console.log('clicked');
    this.setState({
      box
    })
  }
  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  onButtonSubmit = () => {
    this.setState({
      imageURL: this.state.input,
    });
    app.models
      .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like the ones found here: https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
        // '53e1df302c079b3db8a0a36033ed2d15',
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      // .then(response => response.json())
      .then(data => {

        this.displayFaceBox(this.calculateFaceLocation(data.outputs[0].data.regions[0].region_info.bounding_box))
      })
      .catch(err => console.log(err));
    //     // .then(response => {
    //     //   console.log('hi', response)
    //     //   if (response) {
    //     //     fetch('http://localhost:3000/image', {
    //     //       method: 'put',
    //     //       headers: { 'Content-Type': 'application/json' },
    //     //       body: JSON.stringify({
    //     //         id: this.state.user.id
    //     //       })
    //     //     })

    //     .then(count => {
    //       this.setState(Object.assign(this.state.user, { entries: count }))
    //     })

    // }
    //       this.displayFaceBox(this.calculateFaceLocation(response))
    //     })
  }

  render() {
    const { imageURL, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={ParticleOptions}
        />
        <Navigation />
        <SignIn />
        <div className='header'>
          <div className='logo'>
            <Logo />
          </div>
          <div className='rank'>
            <Rank />
          </div>
        </div>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageURL={imageURL} box={box} />
      </div >
    );
  }

}

export default App;
