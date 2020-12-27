import React,{useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import { setindexMusictoAudio} from '../../actions/ListMusic';


function AudioPlay(props) {
  const [_spinimg,_setspinImg] = useState(0);
  const indexmusic = useSelector(state => state.ListMusic.index)
  const listmusic = useSelector(state => state.ListMusic.ListMusic);
  const showAudioPlay = useSelector(state => state.ListMusic.openDialogListen)
  const dispatch = useDispatch();


  ////////////////////////////music previous/////////////////
  const handleClickPrevious = () => {
    if(indexmusic !==0){
      const action = setindexMusictoAudio(indexmusic-1);
      dispatch(action);
      props.handleSetAnimationImgList(indexmusic-1);
    }
  }
  ////////////////////////////music next/////////////////
  const handleClickNext = () => {
    if(indexmusic !==(listmusic-1)){
      const action = setindexMusictoAudio(indexmusic+1);
      dispatch(action);
      props.handleSetAnimationImgList(indexmusic+1);
    }  
  }
  const renderComponent = () =>{
    if(showAudioPlay)
      return(
        <div></div>
      )
    else{
        return(
          <div className="AudioPlay">
            <img
                      alt="..."
                      src={listmusic[indexmusic].image}
                      spinimg={_spinimg}
                  />
            <div className="NameAudio">
              <marquee>{listmusic[indexmusic].title}</marquee>
              <marquee>{listmusic[indexmusic].artist}</marquee>
            </div>
            <AudioPlayer
                className="bodyaudio"
                autoPlay
                src={listmusic[indexmusic].src}
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
