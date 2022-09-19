import React from "react";

export interface ButtonProps {
    label: string;
}

const CustomButton = (props: ButtonProps) => {
    return <button>{props.label}</button>;
};

export default CustomButton;