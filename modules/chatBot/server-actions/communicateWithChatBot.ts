"use server";
import { getStockData } from "@/lib/chatbot/getStockData";
import { ChatBotQuestion } from "../types/chatBot";

import { throwCustomError } from "@/utils/throwCustomError";
import { ErrorMessages, ErrorStatusCode } from "@/shared/enums/errors";
import { getAnswer } from "./helpers";

export async function communicateWithChatBot({
	question,
	chatBotState,
}: ChatBotQuestion) {
	try {
		const stockData = await getStockData();
		const response = getAnswer({ question, chatBotState, stockData });

		return response;
	} catch (error) {
		if (error instanceof Error) {
			throwCustomError({
				errorMessage: ErrorMessages.FAILED_GENERATING_ANSWER,
				status: ErrorStatusCode.BAD_REQUEST,
				cause: error.message,
			});
		}
	}
}
