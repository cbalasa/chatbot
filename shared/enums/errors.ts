export enum ErrorStatusCode {
	NOT_FOUND = 404,
	SERVER_ERROR = 500,
	BAD_REQUEST = 400,
}

export enum ErrorMessages {
	FAILED_GETTING_STOCKS = "We could not load stock data",
	FAILED_GENERATING_ANSWER = "We could not generate an answer",
}
