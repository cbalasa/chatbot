import { AnswerItem } from "@/modules/chatBot/types/chatBot";
import { StockData, TopStock } from "@/shared/types/stockData";
import { createSlice } from "@reduxjs/toolkit";

interface ChatBotState {
	messages: {
		answer: AnswerItem;
		question: StockData | TopStock;
	}[];
	loading: boolean;
	currentStockExchange: StockData | null;
}

const initialState: ChatBotState = {
	messages: [],
	loading: true,
	currentStockExchange: null,
};

const chatBot = createSlice({
	name: "chatBot",
	initialState,
	reducers: {
		chatBotMessagesReducer: (state, { payload }) => {
			state.messages = [...state.messages, ...payload];
		},
		chatBotLoadingReducer: (state, { payload }) => {
			state.loading = payload;
		},
		chatBotCurrentStockExchangeReducer: (state, { payload }) => {
			state.currentStockExchange = payload;
		},
	},
});

export const chatBotMessagesSelector = ({
	chatBot,
}: {
	chatBot: ChatBotState;
}) => chatBot.messages;
export const chatBotLoadingSelector = ({
	chatBot,
}: {
	chatBot: ChatBotState;
}) => chatBot.loading;
export const chatBotCurrentStockExchangeSelector = ({
	chatBot,
}: {
	chatBot: ChatBotState;
}) => chatBot.currentStockExchange;
export const setchatBotAction = chatBot.actions;

export default chatBot;
