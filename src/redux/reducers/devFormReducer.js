import axios from 'axios'

const initialState = {
    devPost: {}
}

const UPDATE_DEVELOPER_FORM = "UPDATE_DEVELOPER_FORM"

export function updateDevForm(skills) {
    
    
    return {
        type: UPDATE_DEVELOPER_FORM,
        payload: axios.post('/api/devposts/', skills)
    
    }
}

export default function reducer (state=initialState, action) {
    console.log(action.payload)
    switch(action.type) {
        case `${UPDATE_DEVELOPER_FORM}_FULFILLED`: {
            return {
                ...state,
                devPost: action.payload.data
            }
        } default: return state;
    }
}
