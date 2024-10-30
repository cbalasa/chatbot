import { ChatBotState } from "../enums/enums";
import {
	Answer,
	AnswerItem,
	ChatBotQuestion,
	MainMenuGoBack,
	Question,
} from "../types/chatBot";
import {
	isStockData,
	isTopStock,
} from "@/shared/types/typeGuards/stockDataTypeGuards";
import { StockData, TopStock } from "@/shared/types/stockData";

const mainMenuGoBack: MainMenuGoBack[] = [
	{
		code: "mainMenu",
		option: "Main Menu",
	},
	{
		code: "selectStock",
		option: "Go back",
	},
];

export const getAnswer = async ({
	question,
	chatBotState,
	stockData,
}: ChatBotQuestion) => {
	const answer: Answer[] = [];

	if (chatBotState === ChatBotState.CHAT_BOT_ERROR) {
		constructResponse({ chatBotState: ChatBotState.CHAT_BOT_ERROR });
	}

	if (chatBotState === ChatBotState.INITIAL) {
		answer.push(constructResponse({ chatBotState: ChatBotState.INITIAL }));
		answer.push(
			constructResponse({ stock: stockData, chatBotState: ChatBotState.HOME }),
		);
	} else {
		const stockAnswer = getRequestedStock({
			question,
			chatBotState,
			stockData,
		});
		if (stockAnswer) {
			answer.push(constructResponse({ stock: stockAnswer!, chatBotState }));
		} else {
			answer.push(
				constructResponse({ chatBotState: ChatBotState.CHAT_BOT_ERROR }),
			);
		}
	}

	return answer;
};

const getRequestedStock = ({
	question,
	chatBotState,
	stockData,
}: ChatBotQuestion) => {
	let stockAnswer;
	if (chatBotState === ChatBotState.HOME) {
		stockAnswer = stockData;
	}
	if (question) {
		stockAnswer = findRequestedStock({ question, stockData });
	}

	return stockAnswer;
};

const findRequestedStock = ({
	question,
	stockData,
}: {
	question: Question;
	stockData: StockData[] | TopStock[] | undefined;
}): StockData | TopStock | TopStock[] => {
	for (const stock of stockData!) {
		if (stock.code === question?.code) {
			if (isStockData(stock)) {
				return stock.topStocks;
			}
			return stock;
		}
		if (isStockData(stock)) {
			const foundStock: StockData | TopStock | TopStock[] = findRequestedStock({
				question,
				stockData: stock.topStocks,
			});

			if (foundStock) {
				return foundStock;
			}
		}
	}

	return undefined!;
};

export const constructResponse = ({
	stock,
	chatBotState,
}: {
	stock?: StockData[] | TopStock[] | TopStock | StockData;
	chatBotState?: string;
}) => {
	const answer: AnswerItem = {
		static: null,
	};
	if (chatBotState === ChatBotState.CHAT_BOT_ERROR) {
		answer.static = "Sorry! Can you try again?";
		answer.mainMenuGoBack = [mainMenuGoBack[0]];
	}
	if (chatBotState === ChatBotState.INITIAL) {
		answer.static = "Hello! Welcome to LSEG. I'm here to help you.";
	}
	if (chatBotState === ChatBotState.HOME) {
		answer.static = "Please select a Stock Exchange";
		answer.stockExchange = stock as StockData[];
	}
	if (chatBotState === ChatBotState.SELECT_STOCK) {
		answer.static = "Please select a stock";
		answer.stockSelect = stock as TopStock[];
	}
	if (
		chatBotState === ChatBotState.SHOW_STOCK_PRICE &&
		stock &&
		!Array.isArray(stock) &&
		isTopStock(stock)
	) {
		answer.static = `Stock price of ${stock.stockName} is ${stock.price}. Please select an option`;
		answer.mainMenuGoBack = mainMenuGoBack;
	}

	return { answer };
};
