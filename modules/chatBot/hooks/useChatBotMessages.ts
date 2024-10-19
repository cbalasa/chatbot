"use client";

import { communicateWithChatBot } from "../server-actions/communicateWithChatBot";
import { useDispatch } from "react-redux";
import { setchatBotAction } from "@/lib/store/slices/chatBot";
import { ChatBotQuestion } from "../types/chatBot";
import { ChatBotState } from "../enums/enums";
import { constructResponse } from "../server-actions/helpers";

const useChatBotMessages = () => {
	const dispatch = useDispatch();

	const handledError = async () => {
		const answer = constructResponse({
			chatBotState: ChatBotState.CHAT_BOT_ERROR,
		});

		dispatch(setchatBotAction.chatBotMessagesReducer([answer]));
		dispatch(setchatBotAction.chatBotLoadingReducer(false));
	};

	const sendQuestion = async ({ question, chatBotState }: ChatBotQuestion) => {
		dispatch(setchatBotAction.chatBotLoadingReducer(true));

		setTimeout(async () => {
			try {
				const response = await communicateWithChatBot({
					question,
					chatBotState,
				});
				dispatch(setchatBotAction.chatBotMessagesReducer(response));
				dispatch(setchatBotAction.chatBotLoadingReducer(false));
			} catch (error) {
				handledError();
			}
		}, 500);
	};

	return { sendQuestion };
};

export default useChatBotMessages;
