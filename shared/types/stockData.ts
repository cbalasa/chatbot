export interface StockData {
	code: string;
	stockExchange: string;
	topStocks: TopStock[];
}

export interface TopStock {
	code: string;
	stockName: string;
	price: number;
}
