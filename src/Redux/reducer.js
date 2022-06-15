import { ADD_USER, DELETE_USER, GET_SINGLE_USER, GET_USERS, UPDATE_USER } from "./action"

const initState = {
    users: [],
    user : {},
    loading:true
}


export const userReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS : 
        return {
            ...state,
            users : action.payload,
            loading:false,
        }
        case DELETE_USER : 
        return {
            ...state,
            loading:false,
        }
        case ADD_USER:
            return{
                ...state,
                loading:false
            }
        case GET_SINGLE_USER : 
        return {
            ...state,
            user : action.payload,
            loading:false
        }
        case UPDATE_USER:
            return {
                ...state,
                loading:false
            }

        default : return state
    }    
}