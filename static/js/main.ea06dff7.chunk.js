(this.webpackJsonpdrummachine=this.webpackJsonpdrummachine||[]).push([[0],{14:function(e,a,t){},8:function(e,a,t){e.exports=t(9)},9:function(e,a,t){"use strict";t.r(a);var i=t(3),s=t(4),d=t(1),l=t(7),c=t(6),n=t(0),p=t.n(n),r=t(5),m=t.n(r),o=(t(14),function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(i.a)(this,t),(s=a.call(this,e)).state={display:"Try!"},s.playAudio=s.playAudio.bind(Object(d.a)(s)),s.reactKey=s.reactKey.bind(Object(d.a)(s)),s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.reactKey)}},{key:"reactKey",value:function(e){var a=document.getElementById(e.key.toUpperCase());null!=a&&(a.play(),"q"==e.key&&this.setState({display:"clap-808"}),"w"==e.key&&this.setState({display:"hihat-808"}),"e"==e.key&&this.setState({display:"hihat-dist01"}),"a"==e.key&&this.setState({display:"kick-808"}),"s"==e.key&&this.setState({display:"kick-big"}),"d"==e.key&&this.setState({display:"openhat-slick"}),"z"==e.key&&this.setState({display:"oerc-hollow"}),"x"==e.key&&this.setState({display:"shaker-shuffle"}),"c"==e.key&&this.setState({display:"snare-brutte"}),console.log(e))}},{key:"playAudio",value:function(e){this.setState({display:e.target.id}),document.getElementById(e.target.textContent).play()}},{key:"render",value:function(){return p.a.createElement("div",{id:"drum-machine"},"React Component",p.a.createElement("div",{id:"display"}," ",this.state.display,p.a.createElement("br",null),p.a.createElement("button",{className:"drum-pad",id:"clap-808",onClick:this.playAudio},p.a.createElement("audio",{type:"audio/mpeg",id:"Q",className:"clip",src:"drumpads/clap-808.mp3"}),"Q"),p.a.createElement("button",{className:"drum-pad",id:"tom-analog",onClick:this.playAudio},p.a.createElement("audio",{type:"audio/mpeg",id:"W",className:"clip",src:"drumpads/tom-analog.mp3"}),"W"),p.a.createElement("button",{className:"drum-pad",id:"hihat-dist01",onClick:this.playAudio},p.a.createElement("audio",{type:"audio/mpeg",id:"E",className:"clip",src:"drumpads/hihat-dist01.mp3"}),"E"),p.a.createElement("button",{className:"drum-pad",id:"kick-808",onClick:this.playAudio},p.a.createElement("audio",{type:"audio/mpeg",id:"A",className:"clip",src:"drumpads/kick-808.mp3"}),"A"),p.a.createElement("button",{className:"drum-pad",id:"kick-big",onClick:this.playAudio},p.a.createElement("audio",{type:"audio/mpeg",id:"S",className:"clip",src:"drumpads/kick-big.mp3"}),"S"),p.a.createElement("button",{className:"drum-pad",id:"openhat-slick",onClick:this.playAudio},p.a.createElement("audio",{id:"D",className:"clip",src:"drumpads/openhat-slick.mp3"}),"D"),p.a.createElement("button",{className:"drum-pad",id:"perc-hollow",onClick:this.playAudio},p.a.createElement("audio",{id:"Z",className:"clip",src:"drumpads/perc-hollow.mp3"}),"Z"),p.a.createElement("button",{className:"drum-pad",id:"shaker-shuffle",onClick:this.playAudio},p.a.createElement("audio",{id:"X",className:"clip",src:"drumpads/shaker-shuffle.mp3"}),"X"),p.a.createElement("button",{className:"drum-pad",id:"snare-brute",onClick:this.playAudio},p.a.createElement("audio",{id:"C",className:"clip",src:"drumpads/snare-brute.mp3"}),"C")))}}]),t}(p.a.Component));m.a.render(p.a.createElement(o,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.ea06dff7.chunk.js.map