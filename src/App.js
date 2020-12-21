import React,{useState} from "react";
import MenuVertical from "./component/MenuVertical/menuVertical";
import PlayAudio from "./component/AudioPlay/PlayAudio";
import NewMusic from "./component/NewMusic/NewMusic";
import { Route, Switch,Redirect } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
function App() {
	const [AudioPlay,setAudioPlay] = useState();
	const [showAudioPlay,setshowAudioPlay] = useState(true);
	//////////////index music in list////////////////////
	const [indexMusic,setIndexMusic] = useState(0);
	const handleSetAudioPlay = (e,index) =>{
		setIndexMusic(index);
		setAudioPlay(e);
		setshowAudioPlay(false);
	}
	///////////////// Set Wave Animation Img in List ////////////////// 
	const [index,setindex] = useState(-1);
	const handleSetAnimationImgList = (index)=>{
		setindex(index);
	}
  return (
	<div className="index-page">
		<MenuVertical
			index={index}
			handleSetAudioPlay={handleSetAudioPlay}
		/>
		
		<PlayAudio
			AudioPlay={AudioPlay}
			indexMusic={indexMusic}
			showAudioPlay={showAudioPlay}
			handleSetAnimationImgList={handleSetAnimationImgList}/>
			
		<Switch>
          
          <Route path="/KhamPha" component={() => <HomePage
                                                  handleSetAudioPlay={handleSetAudioPlay}                              
                                                />
          }/>
          <Route path="/MoiPhatHanh" component={() => <NewMusic
                                                  index={index}
												  handleSetAudioPlay={handleSetAudioPlay}
                                                />
          }/>
		  <Redirect from="/" to="/KhamPha" />
        </Switch>
	</div>
  );
}

export default App;
