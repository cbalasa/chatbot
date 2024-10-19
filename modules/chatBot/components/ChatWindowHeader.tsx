// import Button from "@/components/Buttons/Button";
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
		<div className="h-10 bg-primary flex w-full justify-center items-center text-white text-base font-medium relative">
			<Button
				classes="absolute right-4 bottom-2.5"
				onClick={() => {
					setShowChatWindow(false);
				}}
				name="close-bot"
				disabled={true}
			>
				<Svg name={SvgName.CLOSE_BUTTON} stroke="#fff" size={20} />
			</Button>
		</div>
	);
}

export default ChatWindowHeader;
