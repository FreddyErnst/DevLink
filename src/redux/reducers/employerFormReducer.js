import axios from 'axios'

const initialState = {
    employerPost: {}
}

const ADD_EMPLOYER_FORM = "ADD_EMPLOYER_FORM"
const UPDATE_EMPLOYER_FORM = "UPDATE_EMPLOYER_FORM"
const UPDATE_EMPLOYER_USERNAME = "UPDATE_EMPLOYER_USERNAME"
const UPDATE_EMPLOYER_EMAIL = "UPDATE_EMPLOYER_EMAIL"

export function addEmployerForm(skills) {
    return {
        type: ADD_EMPLOYER_FORM,
        payload: axios.post('/api/employerposts/', skills)
    
    }
}

export function updateEmployerEmail(email) {
    return {
        type: UPDATE_EMPLOYER_EMAIL,
        payload: axios.put('/api/employer/email', email)
    }
}

export function updateEmployerUsername(username) {
    return {
        type: UPDATE_EMPLOYER_USERNAME,
        payload: axios.put('/api/employer/username', username)
    }
}

export function updateEmployerForm(skills) {
    return {
        type: UPDATE_EMPLOYER_FORM,
        payload: axios.put('api/employerposts', skills)
    }
}
export default function reducer (state=initialState, action) {
    console.log(action.payload)
    switch(action.type) {
        case `${ADD_EMPLOYER_FORM}_FULFILLED`: {
            return {
                ...state,
                employerPost: action.payload.data
            }
        
        } case UPDATE_EMPLOYER_EMAIL: {
            return {
                ...state
            }
        } case UPDATE_EMPLOYER_USERNAME: {
            return {
                ...state
            }
        } case UPDATE_EMPLOYER_FORM: {
            return {
                ...state,
                employerPost: action.payload.data
            }
        }
        default: return state;
    }
}