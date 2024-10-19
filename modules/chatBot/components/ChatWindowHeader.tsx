import Button from "@/shared/components/Button/Button";
import Svg from "@/shared/components/Svg/Svg";
import { SvgName } from "@/shared/enums/svg";
import React from "react";

function ChatWindowHeader({
	setShowChatWindow,
}: {
	setShowChatWindow: (value: React.SetStateAction<boolean>) => void;
}) {
	return (
		<div className="h-10 bg-primary flex w-full justify-between items-center text-white text-base font-medium relative px-4">
			<div className="flex gap-2 h-10 items-center">
				<Svg name={SvgName.CHAT_BOT_ICON} fill="#fff" />
				<span className="text-white">Chatbot</span>
			</div>
			<Button
				classes="absolute right-4 bottom-2.5"
				onClick={() => {
					setShowChatWindow(false);
				}}
				name="close-bot"
			>
				<Svg name={SvgName.CLOSE_BUTTON} stroke="#fff" size={20} />
			</Button>
		</div>
	);
}

export default ChatWindowHeader;
