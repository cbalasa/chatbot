import { StockData, TopStock } from "@/shared/types/stockData";

export type Question = StockData | TopStock | MainMenuGoBack;

export interface ChatBotQuestion {
	question?: Question;
	chatBotState?: string;
	stockData?: StockData[] | TopStock[];
}

export interface MainMenuGoBack {
	code: string;
	option: string;
}

export interface AnswerItem {
	static: string | null;
	stockExchange?: StockData[];
	stockSelect?: TopStock[];
	mainMenuGoBack?: MainMenuGoBack[];
}

export interface Answer {
	answer: AnswerItem;
}
