import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import createTitle from "@parachutehome/create-title.macro";
import { SkillsBar as SkillsBarComponent } from "./SkillsBar";
export default {
  title: createTitle(),
  component: SkillsBarComponent,
} as ComponentMeta<typeof SkillsBarComponent>;

const Template: ComponentStory<typeof SkillsBarComponent> = () => (
  <SkillsBarComponent />
);
export const SkillsBar = Template.bind({});
