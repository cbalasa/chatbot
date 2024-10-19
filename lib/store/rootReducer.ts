import { combineReducers } from "redux";
import chatBot from "./slices/chatBot";

const rootReducer = combineReducers({
	[chatBot.name]: chatBot.reducer,
});

export default rootReducer;
