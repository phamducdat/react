import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DP_Button from "./DP_Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/DP_Button",
    component: DP_Button,
} as ComponentMeta<typeof DP_Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DP_Button> = (args) => <DP_Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: "Click me!",
};
