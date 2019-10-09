import Axios from "axios";


const initialState = {
    developer: {},
    employer: {}
}

const UPDATE_DEVELOPER = "UPDATE_DEVELOPER"
const UPDATE_EMPLOYER = "UPDATE_EMPLOYER"
const LOGOUT_DEV = "LOGOUT_DEV"
const LOGOUT_EMPLOYER = "LOGOUT_EMPLOYER"
const DELETE_DEVELOPER_ACCOUNT = "DELETE_DEVELOPER_ACCOUNT"
const DELETE_EMPLOYER_ACCOUNT = "DELETE_EMPLOYER_ACCOUNT"
const GET_DEV = "GET_DEVELOPER"
const GET_EMPLOYER = "GET_EMPLOYER"

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

export function getDev() {
    return {
        type: GET_DEV,
        payload: Axios.get('/auth/dev')
    }
}


export function getEmployer() {
    return {
        type: GET_EMPLOYER,
        payload: Axios.get('/auth/employer')
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
export function deleteDeveloperAccount() {
    return {
        type: DELETE_DEVELOPER_ACCOUNT,
        payload: Axios.delete('/auth/developer')
    }
}

export function deleteEmployerAccount() {
    return {
        type: DELETE_EMPLOYER_ACCOUNT,
        payload: Axios.delete('/auth/employer')
    }
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_DEVELOPER:
            return {
                ...state,
                developer: action.payload
            }

        case UPDATE_EMPLOYER:
            return {
                ...state,
                employer: action.payload
            }

        case LOGOUT_DEV:
            return {
                ...state,
                developer: {}
            }

        case LOGOUT_EMPLOYER:
            return {
                ...state,
                employer: {}
            }
        case `${DELETE_DEVELOPER_ACCOUNT}_FULFILLED`:
            return {
                ...state,
                developer: {}

            }
        case `${DELETE_EMPLOYER_ACCOUNT}_FULFILLED`:
            return {
                ...state,
                employer: {}
            }

        case `${GET_DEV}_FULFILLED`:
            return {
                ...state,
                developer: action.payload.data
            }
        case `${GET_EMPLOYER}_FULFILLED`:
            return {
                ...state,
                employer: action.payload.data
            }
        default: return state;
    }
}