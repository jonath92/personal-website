import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import createTitle from "@parachutehome/create-title.macro";
import { Cover as CoverComponent } from "./Cover";

export default {
  title: createTitle(),
  component: CoverComponent,
} as ComponentMeta<typeof CoverComponent>;

const Template: ComponentStory<typeof CoverComponent> = (args) => (
  <CoverComponent {...args} />
);
export const Cover = Template.bind({});
