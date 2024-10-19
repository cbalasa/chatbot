import path from "path";
import fs from "fs";
import { StockData } from "@/shared/types/stockData";
import { throwCustomError } from "@/utils/throwCustomError";
import {
	ErrorMessages,
	ErrorStatusCode,
} from "@/shared/enums/errorsStatusCode";
import { isNodeError } from "@/shared/types/typeGuards/error";

export const getStockData = async () => {
	try {
		const stockDataFilePath = path.join(
			process.cwd(),
			`/database/stock_data.json`,
		);
		const readFile = await fs.promises.readFile(stockDataFilePath, "utf8");
		const stockData: StockData[] = JSON.parse(readFile);

		return stockData;
	} catch (error) {
		if (isNodeError(error)) {
			throw throwCustomError({
				errorMessage: ErrorMessages.FAILED_GETTING_STOCKS,
				status: ErrorStatusCode.BAD_REQUEST,
			});
		}
	}
};
