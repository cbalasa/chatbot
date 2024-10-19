import React from "react";

export default function Input({
	name,
	value,
	placeholder,
	disabled,
	onChange = () => {},
	onKeyDown = () => {},
	type = "text",
}: {
	name: string;
	value?: string;
	placeholder: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	type?: string;
	disabled?: boolean;
}) {
	return (
		<input
			type={type}
			value={value}
			name={name}
			placeholder={placeholder}
			className="flex flex-1 px-2 py-2 focus:primary rounded-md border-primary border text-sm w-full disabled:bg-gray-500"
			onChange={onChange}
			onKeyDown={onKeyDown}
			disabled={disabled}
		/>
	);
}
