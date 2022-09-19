import React from "react";

export interface DP_ButtonProps {
    label: string;
}

const DP_Button = (props: DP_ButtonProps) => {
    return <button>{props.label}</button>;
};

export default DP_Button;