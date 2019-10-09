import axios from 'axios'

const initialState = {
    devPost: {},
    employer: [],
    shouldRedirect: false
}

const ADD_DEVELOPER_FORM = "ADD_DEVELOPER_FORM"
const UPDATE_DEVELOPER_FORM = "UPDATE_DEVELOPER_FORM"
const UPDATE_DEVELOPER_USERNAME = "UPDATE_DEVELOPER_USERNAME"
const UPDATE_DEVELOPER_EMAIL = "UPDATE_DEVELOPER_EMAIL"
const GET_EMPLOYER_BY_SKILL = "GET_EMPLOYER_BY_SKILL"


export function addDevForm(skills) {


    return {
        type: ADD_DEVELOPER_FORM,
        payload: axios.post('/api/devposts/', skills)

    }
}

export function getEmployerBySkill(skill1) {
    return {
        type: GET_EMPLOYER_BY_SKILL,
        payload: axios.get(`/api/employerpost/${skill1}`)
    }
}
export function updateDevForm(skills) {
    return {
        type: UPDATE_DEVELOPER_FORM,
        payload: axios.put('/api/devposts/', skills)
    }
}

export function updateDeveloperUsername(username) {
    return {
        type: UPDATE_DEVELOPER_USERNAME,
        payload: axios.put('/api/developer/username', username)
    }
}

export function updateDeveloperEmail(email) {
    return {
        type: UPDATE_DEVELOPER_EMAIL,
        payload: axios.put('/api/developer/email', email)
    }
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case `${ADD_DEVELOPER_FORM}_FULFILLED`:
            return {
                ...state,
                shouldRedirect: true,
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
        case `${UPDATE_DEVELOPER_FORM}_FULFILLED`:
    
            return {
                ...state,
                shouldRedirect: true,
                devPost: action.payload.data
            }
        case `${GET_EMPLOYER_BY_SKILL}_FULFILLED`: {
            return {
                ...state,
                shouldRedirect: false,
                employer: action.payload.data
            }
        }




        default: return state;
    }
}
