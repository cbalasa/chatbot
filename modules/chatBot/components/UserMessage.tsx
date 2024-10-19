import {
	isStockData,
	isTopStock,
} from "@/shared/types/typeGuards/stockDataTypeGuards";
import React from "react";
import { Question } from "../types/chatBot";
import { convertToSentenceCase } from "@/utils/stringManipulation";

function UserMessage({ question }: { question: Question }) {
	const printQuestion = (question: Question) => {
		if (isStockData(question)) {
			return question.stockExchange;
		}
		if (isTopStock(question)) {
			return question.stockName;
		}

		return question.option;
	};
	return (
		<span
			className={`m-2 rounded-lg p-2 self-end bg-lighterMediumGrey bg-opacity-20 w-9/12 capitalize`}
		>
			{convertToSentenceCase(printQuestion(question))}
		</span>
	);
}

export default UserMessage;
