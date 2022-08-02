import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import createTitle from "@parachutehome/create-title.macro";
import { BlinkedCarred as BlinkedCarredComponent } from "./BlinkedCarred";
export default {
  title: createTitle(),
  component: BlinkedCarredComponent,
} as ComponentMeta<typeof BlinkedCarredComponent>;

const Template: ComponentStory<typeof BlinkedCarredComponent> = (args) => (
  <BlinkedCarredComponent />
);

export const BlinkedCarred = Template.bind({});
