
const ADD = '0';
const REMOVE = '1';
//reducer
export function counter(state=0, action){
    switch(action.type){
        case '0':
          return state+1
        case '1':
          return state-1
        default:
         return 10
    }
}

export function add(){
    return {type:ADD};
}

export function remove(){
    return {type:REMOVE};
}

export function addAsync(){
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 2000)
    }
}