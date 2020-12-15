import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

function AudioPlay(props) {
  return (
	  <div className="AudioPlay">
		  	<AudioPlayer
		  		className="bodyaudio"
                autoPlay
                src={props.AudioPlay.src}
                layout={'stacked-reverse'}
                onPlay={e => console.log("onPlay")}
            />  
	    <div className="Icon"><i className="fas fa-caret-right"></i></div>
		<div className="NameAudio"><p>{props.AudioPlay.title} - {props.AudioPlay.artist}</p></div>
	  </div>
  );
}

export default AudioPlay;
