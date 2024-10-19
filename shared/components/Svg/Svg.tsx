import ChatBotIcon from "@/assets/chat-bot-svgrepo-com.svg";
import CloseButton from "@/assets/close.svg";
import SendMessage from "@/assets/send_message.svg";
import { SvgName } from "@/shared/enums/svg";

interface SvgProps {
	name: string;
	classes?: string;
	size: number;
	fill?: string;
	stroke?: string;
}

const Svg = ({ name, classes, fill, stroke, size = 20 }: SvgProps) => {
	const displayIcon = (name: string) => {
		switch (name) {
			case SvgName.CHAT_BOT_ICON:
				return <ChatBotIcon width={size} className={classes} fill={fill} />;

			case SvgName.CLOSE_BUTTON:
				return <CloseButton width={size} className={classes} stroke={stroke} />;

			case SvgName.SEND_MESSAGE:
				return <SendMessage width={size} className={classes} fill={fill} />;

			default:
				break;
		}
	};

	return displayIcon(name);
};

export default Svg;
