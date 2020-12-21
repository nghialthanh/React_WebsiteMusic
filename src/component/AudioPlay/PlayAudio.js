import React,{useState,useEffect} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
function AudioPlay(props) {
  const [_spinImg,_setspinImg] = useState(0);
  const [_currentMusicIndex,_setcurrentMusicIndex] = useState(0);
  useEffect(() => {
      _setcurrentMusicIndex(props.indexMusic);
  },[props.indexMusic]);
  ////////////////////////////
  const handleClickPrevious = () => {
    if(_currentMusicIndex !==0){
      _setcurrentMusicIndex(_currentMusicIndex-1);
      props.handleSetAnimationImgList(_currentMusicIndex-1);
    }
  }
  const handleClickNext = () => {
    if(_currentMusicIndex !==(props.AudioPlay.length-1)){
      _setcurrentMusicIndex(_currentMusicIndex+1);
      props.handleSetAnimationImgList(_currentMusicIndex+1);
    }  
  }
  const renderComponent = () =>{
    if(props.showAudioPlay)
      return(
        <div></div>
      )
    else{
        return(
          <div className="AudioPlay">
            <img
                      alt="..."
                      src={props.AudioPlay[_currentMusicIndex].image}
                      spinImg={_spinImg}
                  />
            <div className="NameAudio">
              <marquee>{props.AudioPlay[_currentMusicIndex].title}</marquee>
              <marquee>{props.AudioPlay[_currentMusicIndex].artist}</marquee>
            </div>
            <AudioPlayer
                className="bodyaudio"
                autoPlay
                src={props.AudioPlay[_currentMusicIndex].src}
                showSkipControls={true}
                showJumpControls={false}
                layout="horizontal"
                onPlay={()=>_setspinImg(1)}
                onPause={()=>_setspinImg(0)}
                onClickPrevious={()=>handleClickPrevious()}
                onClickNext={()=>handleClickNext()}
                onEnded={()=>handleClickNext()}
                
            />
          </div>
        )
    }
  }
  return (
    <div>
	    {renderComponent()}
    </div>
  );
}

export default AudioPlay;
