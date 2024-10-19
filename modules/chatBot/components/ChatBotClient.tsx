"use client";
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import Svg from "@/shared/components/Svg/Svg";
import { SvgName } from "@/shared/enums/svg";
import { colors } from "@/tailwind.config";

function ChatBotClient() {
	const [showChatWindow, setShowChatWindow] = useState(false);

	return (
		<>
			<div
				className="fixed md:right-8 md:bottom-8 right-2 bottom-2 flex flex-col justify-center align-middle items-center cursor-pointer w-14 h-14 rounded-full z-80 drop-shadow-lg bg-white overflow-hidden "
				onClick={() => setShowChatWindow(!showChatWindow)}
			>
				<Svg name={SvgName.CHAT_BOT_ICON} size={40} fill={colors.primary} />
			</div>
			{showChatWindow && <ChatWindow setShowChatWindow={setShowChatWindow} />}
		</>
	);
}

export default ChatBotClient;
