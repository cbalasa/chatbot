import React, { useEffect } from "react";
import UserMessage from "./UserMessage";
import ChatBotMessage from "./ChatBotMessage";
import { useSelector } from "react-redux";
import { chatBotMessagesSelector } from "@/lib/store/slices/chatBot";
import LoadingResponse from "./LoadingResponse";

function ChatWindowBody() {
	const messages = useSelector(chatBotMessagesSelector);

	const scrollToBottom = () => {
		let messagesWrapper: HTMLElement | null =
			document.getElementById("messages");
		if (messagesWrapper) {
			messagesWrapper.scrollTo({
				left: 0,
				top: messagesWrapper.scrollHeight,
				behavior: "smooth",
			});
		}
	};
	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div className="flex flex-col mb-2  relative text-sm mt-4 ">
			<div
				className="flex flex-col overflow-y-auto px-2 h-[40vh] w-full pb-2"
				id="messages"
			>
				{messages?.map((message, index) => {
					return (
						<div key={index} className="flex flex-col w-full ">
							{Object.keys(message).map(key => {
								return (
									<div key={key} className="flex flex-col mb-4">
										{message?.question ? (
											<UserMessage question={message.question} />
										) : (
											<ChatBotMessage answer={message.answer} index={index} />
										)}
									</div>
								);
							})}
						</div>
					);
				})}
				<LoadingResponse />
			</div>
		</div>
	);
}

export default ChatWindowBody;
