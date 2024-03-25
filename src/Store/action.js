
export const CreateUserAction = (user) => {
    return {type:"Create_user", payload:user}
}


export const UpdateUserAction = (newuser) => {
    return {type:"Update_user", payload:newuser}
}


export const DeleteUserAction = (id) => {
    return {type:"Delete_user", payload:id}
}