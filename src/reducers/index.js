import ListNewMusicReducers from "./ListMusic";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    ListMusic: ListNewMusicReducers
});
export default rootReducer;