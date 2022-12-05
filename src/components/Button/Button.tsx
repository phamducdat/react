import React from "react";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button style={{background: 'red'}}>{props.label}</button>;
};

export default Button;
