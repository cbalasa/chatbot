import React from "react";
import styles from "./style.module.css";

interface ButtonProps {
	onClick?: () => void;
	classes?: string;
	name: string;
	children: React.ReactNode;
	disabled?: boolean;
}

function Button({ onClick, classes, name, children, disabled }: ButtonProps) {
	return (
		<button
			className={`${styles.button} ${classes ? classes : ""} `}
			{...(onClick && { onClick: onClick })}
			{...(!onClick ? { type: "submit" } : { type: "button" })}
			name={name}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default Button;
