import { createStore } from "redux";
import mainReducer from "./mainreducer";
let store = createStore(mainReducer);
export default store;
