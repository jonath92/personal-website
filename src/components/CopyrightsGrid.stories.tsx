import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import createTitle from "@parachutehome/create-title.macro";
import { CopyrightsGrid as CopyrightsGridComponent } from "./CopyrightsGrid";
export default {
  title: createTitle(),
  component: CopyrightsGridComponent,
} as ComponentMeta<typeof CopyrightsGridComponent>;

const Template: ComponentStory<typeof CopyrightsGridComponent> = () => (
  <CopyrightsGridComponent />
);
export const CopyrightsGrid = Template.bind({});
