const counter = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state += 1;
        case "DECREMENT":
            if(state > 0){
                state -=1;
            }
            return state
        default:
            return state
    }
}

export default counter