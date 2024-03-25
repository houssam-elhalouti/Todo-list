const initialState = {
    users: [
        {"id": 1, "name":"Leanne Graham", "email":"Sincere@april.biz"},
        {"id": 2, "name":"Ervin Howell", "email":"Shanna@melissa.tv"},
        {"id": 3,"name": "Clementine Bauch","email": "Nathan@yesenia.net"}
    ]
};

// Declare reducer:
const reducer= (state=initialState, action) => {
    switch(action.type) {
        case "Create_user": 
            console.log({...state, users:[...state.users, action.payload]})
            return {...state, users:[...state.users, action.payload]}

        case "Update_user": 
            const user=state.users.find((u)=>u.id==parseInt(action.payload.id))
        if(user) {
            user.name = action.payload.name
            user.email = action.payload.email
        }
        return state
        case "Delete_user":
            return{...state, users:[...state.users.filter((u)=>u.id !== parseInt(action.payload))]}
    
        default:
            return state
    }   

}

export default reducer;