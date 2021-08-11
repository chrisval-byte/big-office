import counter from "./counter";
import { combineReducers } from "redux";

// COMBINE REDUCERS, toma todos los reducers y los junta como uno solo para exportarlo
const reducers = combineReducers({
    counter
})

export default reducers