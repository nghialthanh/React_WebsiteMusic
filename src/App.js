import React,{useState} from "react";
import MenuHeader from "./component/Menu/menu";
import HomePage from "./component/HomePage/HomePage";
import Charts from "./component/HomePage/Charts/Charts";
import PlayAudio from "./component/HomePage/PlayAudio";
import Fire from "./component/HomePage/FireMusic/FireMusic";
import dataAudio from "./component/HomePage/dataAudio";
import Footer from "./component/HomePage/Footer";
function App() {
	const [AudioPlay,setAudioPlay] = useState(dataAudio[0]);
	const handleSetAudioPlay = (e) =>{
		setAudioPlay(e);
	}
  return (
	<div className="index-page">
		<MenuHeader/>
		<PlayAudio
			AudioPlay={AudioPlay}/>
		<div className="wrapper" id="home">
			<HomePage/>
			<div className="main">
          		<Charts
				  key={1}
				  handleSetAudioPlay={handleSetAudioPlay}/>
				<Fire/>
        	</div>
			<Footer/>
		</div>
	</div>
  );
}

export default App;
