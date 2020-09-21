export const coursesReducer = (state = [], action) => {
    console.log("pay"+action.type);
    switch (action.type) {
     case "rey":
         return [...action.payload];
         case "ADD_COURSE":
            return [...action.payload];
        case "DELETE_COURSE":
            return [...action.payload];
        case "UPDATE_COURSE":
            return [...action.payload];
        default :
        return state;


    }
}