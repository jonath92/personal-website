import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import createTitle from "@parachutehome/create-title.macro";
import { ProjectGrid as ProjectGridComponent } from "./ProjectGrid";
export default {
  title: createTitle(),
  component: ProjectGridComponent,
} as ComponentMeta<typeof ProjectGridComponent>;

const Template: ComponentStory<typeof ProjectGridComponent> = () => (
  <ProjectGridComponent />
);
export const ProjectGrid = Template.bind({});
