import axios from 'axios'

const initialState = {
    employerPost: {}
}

const UPDATE_EMPLOYER_FORM = "UPDATE_EMPLOYER_FORM"

export function updateEmployerForm(skills) {
    
    
    return {
        type: UPDATE_EMPLOYER_FORM,
        payload: axios.post('/api/employerposts/', skills)
    
    }
}

export default function reducer (state=initialState, action) {
    console.log(action.payload)
    switch(action.type) {
        case `${UPDATE_EMPLOYER_FORM}_FULFILLED`: {
            return {
                ...state,
                employerPost: action.payload.data
            }
        } default: return state;
    }
}