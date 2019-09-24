import Axios from "axios";


const initialState = {
    developer: {},
    employer: {}
}

const UPDATE_DEVELOPER = "UPDATE_DEVELOPER"
const UPDATE_EMPLOYER = "UPDATE_EMPLOYER"
const LOGOUT_DEV = "LOGOUT_DEV"
const LOGOUT_EMPLOYER = "LOGOUT_EMPLOYER"

export function updateDeveloper(developer) {
    return {
        type: UPDATE_DEVELOPER,
        payload: developer
    }
}

export function updateEmployer(employer) {
    return {
        type: UPDATE_EMPLOYER,
        payload: employer
    }
}

export function logOutDev() {
    Axios.post('/auth/logoutDev')
    return {
        type: LOGOUT_DEV
    }
}

export function logOutEmployer() {
    Axios.post('/auth/logoutEmployer')
    return {
        type: LOGOUT_EMPLOYER,
        
    }
}

export default function reducer (state=initialState, action) {
    console.log(action.payload)
    switch(action.type) {
        case UPDATE_DEVELOPER: {
            return {
                ...state,
                developer: action.payload
            }
        }
        case UPDATE_EMPLOYER: {
            return {
                ...state,
                employer: action.payload
            }
        }
        case LOGOUT_DEV: {
            return {
                ...state,
                developer: {}
            }
        }
        case LOGOUT_EMPLOYER: {
            return {
                ...state,
                employer: {}
            }
        }
        default: return state;
    }
}