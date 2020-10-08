import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';




class Drummachine extends React.Component {

constructor(props){
  super(props);


  this.state = {
    display:'Try!',

  };
  this.playAudio=this.playAudio.bind(this);
  this.reactKey=this.reactKey.bind(this)

}

componentDidMount() {
  document.addEventListener('keydown', this.reactKey);
}

reactKey(evt) {
//receives the key pressed and change the letter to uppercase so it matches the id which is in uppercase
let z=document.getElementById(evt.key.toUpperCase())
//this "if" prevents app crash if other keys of keyboard are pressed
if (z==null){
  return
}


z.play()
// to show the name of audio sample on screen 
if (evt.key=="q"){
this.setState({display:"clap-808"})
}
if (evt.key=="w"){
this.setState({display:"hihat-808"})
}
if (evt.key=="e"){
  this.setState({display:"hihat-dist01"})
  }

if (evt.key=="a"){
    this.setState({display:"kick-808"})
    }
if (evt.key=="s"){
      this.setState({display:"kick-big"})
      }
if (evt.key=="d"){
        this.setState({display:"openhat-slick"})
        }
if (evt.key=="z"){
          this.setState({display:"oerc-hollow"})
          }
if (evt.key=="x"){
            this.setState({display:"shaker-shuffle"})
            }
if (evt.key=="c"){
              this.setState({display:"snare-brutte"})
              }
console.log(evt)
 }

 

playAudio(e){
  
 this.setState({
   display:e.target.id

 })
 let x = document.getElementById(e.target.textContent);


  x.play();
} 


render (){




  return (
  <div  id="drum-machine">React Component

          <div id="display"> {this.state.display}
          <br></br>

            <button className="drum-pad" id="clap-808" onClick={this.playAudio} ><audio type="audio/mpeg" id="Q" className="clip" src="drumpads/clap-808.mp3"></audio>Q</button>
            <button className="drum-pad" id="tom-analog" onClick={this.playAudio} ><audio type="audio/mpeg" id="W" className="clip" src="drumpads/tom-analog.mp3"></audio>W</button>
            <button className="drum-pad" id="hihat-dist01" onClick={this.playAudio} ><audio type="audio/mpeg" id="E" className="clip" src="drumpads/hihat-dist01.mp3"></audio>E</button>
            <button className="drum-pad" id="kick-808" onClick={this.playAudio} ><audio type="audio/mpeg" id="A" className="clip" src="drumpads/kick-808.mp3"></audio>A</button>
            <button className="drum-pad" id="kick-big" onClick={this.playAudio} ><audio type="audio/mpeg" id="S" className="clip" src="drumpads/kick-big.mp3"></audio>S</button>
            <button className="drum-pad" id="openhat-slick" onClick={this.playAudio} ><audio id="D" className="clip" src="drumpads/openhat-slick.mp3"></audio>D</button>
            <button className="drum-pad" id="perc-hollow" onClick={this.playAudio} ><audio id="Z" className="clip" src="drumpads/perc-hollow.mp3"></audio>Z</button>
            <button className="drum-pad" id="shaker-shuffle" onClick={this.playAudio} ><audio id="X" className="clip" src="drumpads/shaker-shuffle.mp3"></audio>X</button>
            <button className="drum-pad" id="snare-brute" onClick={this.playAudio} ><audio id="C" className="clip" src="drumpads/snare-brute.mp3"></audio>C</button>


          </div>
          
  </div>)
}
}


ReactDOM.render(
    <Drummachine />
  ,document.getElementById('root')
);

