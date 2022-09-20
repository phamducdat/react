import React from "react";
import {InputNumber, InputNumberProps} from "antd";


const DP_InputNumber_Money = (props: InputNumberProps) => {
    return (
        <InputNumber
            max={Number.MAX_VALUE}
            formatter={(value) => {
                return `${value}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                );
            }
            }
            parser={(value) =>
                `${value}`.replace(/\$\s?|(,*)/g, "")
            }
            style={{width: '100%'}}

            {...props}
        />
    )
};

export default DP_InputNumber_Money;
