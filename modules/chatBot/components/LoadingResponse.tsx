import React from "react";
import { useSelector } from "react-redux";
import { chatBotLoadingSelector } from "@/lib/store/slices/chatBot";

function LoadingResponse() {
	const loading = useSelector(chatBotLoadingSelector);

	return (
		<>
			{loading && (
				<div className="lds-ellipsis mx-auto">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}
		</>
	);
}

export default LoadingResponse;
