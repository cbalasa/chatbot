import React from "react";
import ChatBotMessageItem from "./ChatBotMessageItem";
import { AnswerItem } from "../types/chatBot";

function ChatBotMessage({
	answer,
	index,
}: {
	answer: AnswerItem;
	index: number;
}) {
	const printAnswer = (answer: AnswerItem) => {
		if (answer?.stockExchange) {
			return printStockExchange(answer);
		}
		if (answer?.stockSelect) {
			return printStockSelect(answer);
		}

		return printMainMenuGoBack(answer);
	};

	const printMainMenuGoBack = (answer: AnswerItem) => {
		return (
			<>
				{answer?.mainMenuGoBack?.map(ans => {
					return (
						<ChatBotMessageItem answer={ans} key={ans.code} index={index} />
					);
				})}
			</>
		);
	};

	const printStockExchange = (answer: AnswerItem) => {
		return (
			<>
				{answer?.stockExchange?.map(ans => {
					return (
						<ChatBotMessageItem answer={ans} key={ans.code} index={index} />
					);
				})}
			</>
		);
	};

	const printStockSelect = (answer: AnswerItem) => {
		return (
			<>
				{answer?.stockSelect?.map(ans => {
					return (
						<ChatBotMessageItem answer={ans} key={ans.code} index={index} />
					);
				})}
			</>
		);
	};

	return (
		<div className="flex flex-col w-9/12">
			<span
				className={`w-full p-2 self-start bg-turquoise bg-opacity-20 ${answer?.stockExchange ? "rounded-t-lg " : "rounded-lg"}`}
			>
				{answer?.static}
			</span>
			{printAnswer(answer)}
		</div>
	);
}

export default ChatBotMessage;
