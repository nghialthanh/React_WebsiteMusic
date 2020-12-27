import React,{useState} from "react";
import MenuVertical from "./component/MenuVertical/menuVertical";
import PlayAudio from "./component/AudioPlay/PlayAudio";
import NewMusic from "./component/NewMusic/NewMusic";
import { Route, Switch,Redirect } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
function App() {
	///////////////// Set Wave Animation Img in List ////////////////// 
	const [index,setindex] = useState(-1);
	const handleSetAnimationImgList = (index)=>{
		setindex(index);
	}
  return (
	<div className="index-page">
		<MenuVertical/>
		
		<PlayAudio
			handleSetAnimationImgList={handleSetAnimationImgList}/>
			
		<Switch>
          
		  <Route path="/KhamPha" component={() => 
													<HomePage/>
          }/>
          <Route path="/MoiPhatHanh" component={() => 
		  											<NewMusic
                                                  		index={index}
                                                	/>
           }/>
		<Redirect from="/" to="/KhamPha" />
        </Switch> 
	</div>
  );
}

export default App;
