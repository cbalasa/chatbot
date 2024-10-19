// import Button from "@/components/Buttons/Button";
import Svg from "@/shared/components/Svg/Svg";
import { SvgName } from "@/shared/enums/svg";
import React from "react";
import { colors } from "@/tailwind.config";
import Button from "@/shared/components/Button/Button";
import Input from "@/shared/components/Input/Input";

function ChatWindowSendMessage() {
	return (
		<div className="border-t flex gap-2 px-2 bg-background py-2 border-lightGrey w-full">
			<Input
				name="Send message"
				placeholder="Select an option"
				disabled={true}
			/>
			<Button name="send message" disabled={true}>
				<Svg name={SvgName.SEND_MESSAGE} fill={colors.primary} size={20} />
			</Button>
		</div>
	);
}

export default ChatWindowSendMessage;
