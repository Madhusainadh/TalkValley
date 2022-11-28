import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { adsreducer } from "./ads.reducer";

const rootReducer = combineReducers({
    ads: adsreducer
  });
   const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
   export default store
  