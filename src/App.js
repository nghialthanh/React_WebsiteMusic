import React,{useState,useEffect} from "react";
import { Route, Switch,Redirect } from "react-router-dom";

import firebase from 'firebase';

import MenuVertical from "./component/MenuVertical/menuVertical";
import PlayAudio from "./component/AudioPlay/PlayAudio";
import NewMusic from "./component/NewMusic/NewMusic";
import HomePage from "./component/HomePage/HomePage";
import LoginForm from './component/Login/LoginForm';
import musicApi from "./api/apiMusic";

function App() {
	///////////////// Set Wave Animation Img in List ////////////////// 
	const [index,setindex] = useState(-1);
	const handleSetAnimationImgList = (index)=>{
		setindex(index);
	}	
	useEffect(() =>{
		console.log(process.env.REACT_APP_API_URL);
		const fetchMusicList = async () => {
			try{
				const response = await musicApi.getAll();
				console.log(response);
			} catch (error) {
				console.log("Fail to call list: ",error);
			}
		}
		fetchMusicList();
	},[]);
	return (
		<div className="index-page">
			<MenuVertical/>
			<PlayAudio
				handleSetAnimationImgList={handleSetAnimationImgList}/>
			<LoginForm/>

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
////////////////firebase////////////////////////////
	// Configure Firebase.
	// const config = {
	// 	apiKey: process.env.REACT_APP_FIREBASE_API,
	// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	// };
	// firebase.initializeApp(config);
	// //Handle firebase auth changed
	// useEffect (() =>{
	// 	const unregisterAuthObserver = firebase.auth().onAuthStateChanged( async (user) => {
	// 		if(!user){
	// 			console.log("Not login");
	// 			return;
	// 		}
	// 		console.log('Login with: ',user.displayName);
	// 		let token = await user.getIdToken
	// 		console.log('Token is: ',token);
	// 	});
	// 	return () => unregisterAuthObserver();
	// },[])
