
export const adminPage = function (state = {}, action) {
    switch (action.type){
        case "ADMIN_ALL_USERS_LIST_RECEIVED":
            return {...state, allUsersList: action.payload}
        default: 
            return state
    }
 };