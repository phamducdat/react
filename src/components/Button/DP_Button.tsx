import React from "react";
import "./Button.css";
import {Button} from "antd";
export interface DP_ButtonProps {
    label: string;
}

const DP_Button = (props: DP_ButtonProps) => {
    return <Button title={"datpd"}>{"hava"}</Button>;
};

export default DP_Button;
