import { StockData, TopStock } from "@/shared/types/stockData";
import { isTopStock } from "@/shared/types/typeGuards/stockDataTypeGuards";
import React from "react";

function UserMessage({ question }: { question: StockData | TopStock }) {
	const printQuestion = (question: StockData | TopStock) => {
		if (isTopStock(question)) {
			return question.stockName;
		}

		return question.stockExchange;
	};
	return (
		<span
			className={`m-2 rounded-lg p-2 self-end bg-primary bg-opacity-20 w-9/12 `}
		>
			{" "}
			{printQuestion(question)}
		</span>
	);
}

export default UserMessage;
