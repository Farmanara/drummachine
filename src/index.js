import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import clap808 from '/home/fighter/mp/fccProjects/drummachine/src/drumpads/clap-808.mp3';
import hihat808 from '/home/fighter/mp/fccProjects/drummachine/src/drumpads/hihat-808.mp3';
import hihatdist01 from '/home/fighter/mp/fccProjects/drummachine/src/drumpads/hihat-dist01.mp3';
import kick808 from '/home/fighter/mp/fccProjects/drummachine/src/drumpads/kick-808.mp3';
import kickbig from '/home/fighter/mp/fccProjects/drummachine/src/drumpads/kick-big.mp3';
import openhatslick from '/home/fighter/mp/fccProjects/drummachine/src/drumpads/openhat-slick.mp3';
import perchollow from '/home/fighter/mp/fccProjects/drummachine/src/drumpads/perc-hollow.mp3';
import shakershuffle from '/home/fighter/mp/fccProjects/drummachine/src/drumpads/shaker-shuffle.mp3';
import snarebrute from '/home/fighter/mp/fccProjects/drummachine/src/drumpads/snare-brute.mp3';


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
if (evt.key==="q"){
this.setState({display:"clap-808"})
}
if (evt.key==="w"){
this.setState({display:"hihat-808"})
}
if (evt.key==="e"){
  this.setState({display:"hihat-dist01"})
  }

if (evt.key==="a"){
    this.setState({display:"kick-808"})
    }
if (evt.key==="s"){
      this.setState({display:"kick-big"})
      }
if (evt.key==="d"){
        this.setState({display:"openhat-slick"})
        }
if (evt.key==="z"){
          this.setState({display:"oerc-hollow"})
          }
if (evt.key==="x"){
            this.setState({display:"shaker-shuffle"})
            }
if (evt.key==="c"){
              this.setState({display:"snare-brutte"})
              }
            }



playAudio(e){

 this.setState({
   display:e.target.id

 })
 let x = document.getElementById(e.target.textContent);
console.log(e.target.textContent)
console.log("x-src:"+x.src);
  x.play();
  
} 


render (){




  return (
  <div  id="drum-machine">React Component

          <div id="display"> {this.state.display}
          <br></br>

            <button className="drum-pad" id="clap-808" onClick={this.playAudio} ><audio type="audio/mp3" id="Q" className="clip" src={clap808}></audio>Q</button>
            <button className="drum-pad" id="tom-analog" onClick={this.playAudio} ><audio type="audio/mp3" id="W" className="clip" src={hihat808}></audio>W</button>
            <button className="drum-pad" id="hihat-dist01" onClick={this.playAudio} ><audio type="audio/mp3" id="E" className="clip" src={hihatdist01}></audio>E</button>
            <button className="drum-pad" id="kick-808" onClick={this.playAudio} ><audio type="audio/mp3" id="A" className="clip" src={kick808}></audio>A</button>
            <button className="drum-pad" id="kick-big" onClick={this.playAudio} ><audio type="audio/mp3" id="S" className="clip" src={kickbig}></audio>S</button>
            <button className="drum-pad" id="openhat-slick" onClick={this.playAudio} ><audio id="D" className="clip" src={openhatslick}></audio>D</button>
            <button className="drum-pad" id="perc-hollow" onClick={this.playAudio} ><audio id="Z" className="clip" src={perchollow}></audio>Z</button>
            <button className="drum-pad" id="shaker-shuffle" onClick={this.playAudio} ><audio id="X" className="clip" src={shakershuffle}></audio>X</button>
            <button className="drum-pad" id="snare-brute" onClick={this.playAudio} ><audio id="C" className="clip" src={snarebrute}></audio>C</button>


          </div>

  </div>)
}
}


ReactDOM.render(
    <Drummachine />
  ,document.getElementById('root')
);