const initialState = {
    isAuth : false,
    username: '',
    password: '',
    status: ''
}

export default function reducer(state = initialState, action){
    // return state
    const { type, payload } = action
    switch(type){
        case 'isLogin':
            return {...state, isAuth : payload}
        default:
            return state
    }
}