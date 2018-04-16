import axios from 'axios'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USERDATA = 'USERDATA'
const initState = {
    isAuth:false,
    user:'hdd',
    age:21
}
//reducer
export function auth(state=initState, action){
    switch(action.type){
        case LOGIN:
          return {...state, isAuth:true}
        case LOGOUT:
          return {...state, isAuth:false} 
        case USERDATA:
          return {...state, user:action.payload.user, age:action.payload.age, isAuth:action.payload.isAuth}
        default:
          return state
    }
}

export function getUserData(){
    return dispatch => {
        axios.get('/api/data').then(res=>{
            if(res.status === 200){
                dispatch(userData(res.data))
            }
        })
    }
}

export function userData(data){
    return {type:USERDATA, payload:data}
}
export function login(){
    return {type:LOGIN}
}
//action
export function logout(){
    return {type:LOGOUT}
}