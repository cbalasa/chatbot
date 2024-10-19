import { MainMenuGoBack } from "@/modules/chatBot/types/chatBot";
import { StockData, TopStock } from "../stockData";

export const isTopStock = (
	stock: TopStock | StockData | MainMenuGoBack,
): stock is TopStock => {
	return "stockName" in stock;
};

export const isStockData = (
	stock: TopStock | StockData | MainMenuGoBack,
): stock is StockData => {
	return "stockExchange" in stock;
};
