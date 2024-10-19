import { ErrorStatusCode } from "@/shared/enums/errorsStatusCode";

interface ErrorCustom extends Error {
	status?: number;
}

export const throwCustomError = ({
	errorMessage,
	status = ErrorStatusCode.SERVER_ERROR,
}: {
	errorMessage: string;
	status: number;
}) => {
	const error: ErrorCustom = new Error(errorMessage);
	error.status = status;
	error.message = errorMessage;
	throw error;
};
