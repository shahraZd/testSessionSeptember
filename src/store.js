import { createStore,applyMiddleware, compose} from "redux";
import listReducer from "./test/Reducer";
import thunk from "redux-thunk";
const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(listReducer,composeEnhancers(applyMiddleware(...middleWare)))
export default store

