import React, { useEffect } from "react";
import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import ChatWindowSendMessage from "./ChatWindowSendMessage";
import { chatBotMessagesSelector } from "@/lib/store/slices/chatBot";
import { useSelector } from "react-redux";
import useChatBotMessages from "../hooks/useChatBotMessages";
import { ChatBotState } from "../enums/enums";

function ChatWindow({
	setShowChatWindow,
}: {
	setShowChatWindow: (value: React.SetStateAction<boolean>) => void;
}) {
	const messages = useSelector(chatBotMessagesSelector);

	const { sendQuestion } = useChatBotMessages();
	useEffect(() => {
		if (!messages.length) {
			sendQuestion({ chatBotState: ChatBotState.INITIAL });
		}
	}, []);

	return (
		<div className="bg-white shadow-xl fixed md:right-24 right-0 md:bottom-8 bottom-20 flex flex-col justify-between lg:w-96 md:w-80 w-full rounded-lg overflow-hidden ">
			<ChatWindowHeader setShowChatWindow={setShowChatWindow} />
			<ChatWindowBody />

			<ChatWindowSendMessage />
		</div>
	);
}

export default ChatWindow;
