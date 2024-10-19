import React from "react";
import { StockData, TopStock } from "@/shared/types/stockData";
import { MainMenuGoBack, Question } from "../types/chatBot";
import {
	isStockData,
	isTopStock,
} from "@/shared/types/typeGuards/stockDataTypeGuards";
import { ChatBotState } from "../enums/enums";
import useChatBotMessages from "../hooks/useChatBotMessages";
import { useDispatch, useSelector } from "react-redux";
import {
	chatBotCurrentStockExchangeSelector,
	chatBotMessagesSelector,
	setchatBotAction,
} from "@/lib/store/slices/chatBot";

function ChatBotMessageItem({
	answer,
	index,
}: {
	answer: StockData | TopStock | MainMenuGoBack;
	index: number;
}) {
	const dispatch = useDispatch();
	const { sendQuestion } = useChatBotMessages();
	const currentStockExchange = useSelector(chatBotCurrentStockExchangeSelector);

	const printAnswer = (answer: StockData | TopStock | MainMenuGoBack) => {
		if (isStockData(answer)) {
			return answer.stockExchange;
		}
		if (isTopStock(answer)) {
			return answer.stockName;
		}
		return answer.option;
	};

	const selectQuestion = (question: Question) => {
		if (question.code === ChatBotState.HOME) {
			return sendQuestion({ chatBotState: question.code });
		}
		if (question.code === ChatBotState.SELECT_STOCK && currentStockExchange) {
			return sendQuestion({
				question: currentStockExchange,
				chatBotState: question.code,
			});
		}

		if (isTopStock(question)) {
			return sendQuestion({
				question,
				chatBotState: ChatBotState.SHOW_STOCK_PRICE,
			});
		}

		if (isStockData(question)) {
			dispatch(setchatBotAction.chatBotCurrentStockExchangeReducer(question));
			return sendQuestion({
				question,
				chatBotState: ChatBotState.SELECT_STOCK,
			});
		}
	};

	const messages = useSelector(chatBotMessagesSelector);
	const isClickable = () => {
		return messages.length - 1 === index;
	};

	return (
		<div
			className={`flex flex-col last:rounded-b-lg border border-turquoise border-opacity-20  bg-opacity-0  ${isClickable() && "hover:bg-opacity-30 cursor-pointer bg-lightGrey"}`}
			onClick={() => isClickable() && selectQuestion(answer)}
		>
			<span className={`w-full p-2 self-start`}> {printAnswer(answer)}</span>
		</div>
	);
}

export default ChatBotMessageItem;
