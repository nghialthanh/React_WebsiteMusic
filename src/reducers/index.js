import ListNewMusicReducers from "./ListMusic";
import loginUserReducers from "./LoginUser";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    ListMusic: ListNewMusicReducers,
    LoginUser: loginUserReducers
});
export default rootReducer;