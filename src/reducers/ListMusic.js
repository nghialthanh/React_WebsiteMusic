import dataAudio from '../component/HomePage/dataAudio';
const initialState = {
    ListMusic: dataAudio,
    index: -1,
    openDialogListen: true
}


const ListNewMusicReducers = (state = initialState,action) => {
    switch(action.type) {
        case 'SET-LIST': {
            const newList = action.payload;
            return {
                ...state,
                ListMusic : newList,
            };
        }
        case 'SET-INDEX': {
            const newindex = action.payload;
            return {
                ...state,
                index : newindex,
            };
        }
        case 'OPEN-DIALOG-MUSIC': {
            const newstate = action.payload;
            return {
                ...state,
                openDialogListen: newstate,
            }
        }
        default:
            return state;
    }
}
export default ListNewMusicReducers;