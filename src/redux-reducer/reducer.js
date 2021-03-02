
const initialState = {
    note: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'NOTE_UPDATE':
            return {
                ...action.payloud
            }
        default:
            return state;
    }
}

export default reducer;