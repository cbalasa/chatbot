import { ErrorStatusCode } from "@/shared/enums/errors";

interface ErrorCustom extends Error {
	status?: number;
}

interface ErrorCustomLog extends ErrorCustom {
	status?: number;
	cause?: string;
	time?: Date;
}

export const throwCustomError = ({
	errorMessage,
	status = ErrorStatusCode.SERVER_ERROR,
	cause,
}: {
	errorMessage: string;
	status: number;
	cause: string;
}) => {
	const error: ErrorCustom = new Error(errorMessage);
	error.status = status;
	error.message = errorMessage;
	logError(error, cause);
	throw error;
};

const logError = (error: ErrorCustom, cause: string) => {
	const logError: ErrorCustomLog = JSON.parse(JSON.stringify(error));
	logError.time = new Date();
	logError.cause = cause;
	console.error(logError);
};
