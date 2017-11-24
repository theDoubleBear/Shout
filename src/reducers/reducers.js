import {
    GET_FULLNAME,
    RECORDING_STATUS,
} from '../actions'

const initialState = {
    fullName: '',
    recording: 'Write your comment!',
}

export const getUserInfo = (state = initialState, action) => {
    switch (action.type){
        case GET_FULLNAME:
            return {...state, fullName: action.fullName}
        default:
            return state;
    }
}

export const getAppInfo = (state = initialState, action) => {
    switch (action.type){
        case RECORDING_STATUS:
            if(action.status == false)
                return {...state, recording: 'Write your comment!'}
            else
                return {...state, recording: 'Recording...'}           
        default:
            return state;
    }
}