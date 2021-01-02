const initialState = {
    openDialogLogin: false
}


const loginUserReducers = (state = initialState,action) => {
    switch(action.type) {
        case 'SET-SHOW-FORM': {
            const newstate = action.payload;
            return {
                ...state,
                openDialogLogin: newstate,
            };
        }
        default:
            return state;
    }
}
export default loginUserReducers;