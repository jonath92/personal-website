import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import createTitle from "@parachutehome/create-title.macro";
import { TextBox as TextBoxComponent } from "./TextBox";
export default {
  title: createTitle(),
  component: TextBoxComponent,
} as ComponentMeta<typeof TextBoxComponent>;

const Template: ComponentStory<typeof TextBoxComponent> = (args) => (
  <TextBoxComponent {...args} />
);

export const TextBox = Template.bind({});

TextBox.args = {
  children: "Textbox content",
};
