import axios from 'axios'

const initialState = {
    devPost: {}
}

const ADD_DEVELOPER_FORM = "UPDATE_DEVELOPER_FORM"
const UPDATE_DEVELOPER_FORM = "UPDATE_DEVELOPER_FORM"
const UPDATE_DEVELOPER_USERNAME = "UPDATE_DEVELOPER_USERNAME"
const UPDATE_DEVELOPER_EMAIL = "UPDATE_DEVELOPER_EMAIL"


export function addDevForm(skills) {
    
    
    return {
        type: ADD_DEVELOPER_FORM,
        payload: axios.post('/api/devposts/', skills)
    
    }
}
export function updateDevForm (skills) {
    return {
        type: UPDATE_DEVELOPER_FORM,
        payload: axios.put('/api/devposts/', skills)
    }
}

export function updateDeveloperUsername (username) {
    return {
        type: UPDATE_DEVELOPER_USERNAME,
        payload: axios.put('/api/developer/username', username)
    }
}

export function updateDeveloperEmail (email) {
    return {
        type: UPDATE_DEVELOPER_EMAIL,
        payload: axios.put('/api/developer/email', email)
    }
}

export default function reducer (state=initialState, action) {
    console.log(action.payload)
    switch(action.type) {
        case `${ADD_DEVELOPER_FORM}_FULFILLED`: 
            return {
                ...state,
                devPost: action.payload.data
            }
            case UPDATE_DEVELOPER_USERNAME: 
            return {
                ...state,
            }
            case UPDATE_DEVELOPER_EMAIL: 
            return {
                ...state,
            }
            case UPDATE_DEVELOPER_FORM: 
            return {
                ...state,
                devPost: action.payload.data
            }
            
        
        
        
        default: return state;
    }
}
