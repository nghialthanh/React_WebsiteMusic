import React from "react";
import Fire from "./FireMusic/FireMusic";
import Footer from "./Footer/Footer";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import GalleryImage from "./GalleryImage/GalleryImage";
import Charts from "./Charts/Charts";
function HomePage(props) {
	const handleSetAudioPlay = (e,index) =>{
		props.handleSetAudioPlay(e,index);
	}
  	return (
		<div className="wrapper" id="home">
			<MenuHorizontal/>
			<GalleryImage/>
			<div className="main">
          		<Charts
				  handleSetAudioPlay={handleSetAudioPlay}/>
				<Fire/>
        	</div>
			<Footer/>
		</div> 
  	);
}

export default HomePage;
