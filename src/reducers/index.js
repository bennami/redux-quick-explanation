import CounterReducer from "./counter";
import LoggedReducer from "./isLogged";
import {combineReducers} from "redux";

const rootReducer = combineReducers({

    CounterReducer,
    LoggedReducer

})
export default rootReducer;
