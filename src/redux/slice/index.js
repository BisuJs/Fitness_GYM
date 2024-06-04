import { combineReducers } from "@reduxjs/toolkit";
import authReducers from './auth';
const rootReducers=combineReducers({
auth:authReducers,
})
export default rootReducers;