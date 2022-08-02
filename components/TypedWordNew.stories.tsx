import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import createTitle from "@parachutehome/create-title.macro";
import { TypedWordNew as TypedWordNewComponent } from "./TypedWordNew";

export default {
  title: createTitle(),
  component: TypedWordNewComponent,
} as ComponentMeta<typeof TypedWordNewComponent>;

const Template: ComponentStory<typeof TypedWordNewComponent> = (args) => (
  <TypedWordNewComponent {...args} />
);

export const TypedWordNew = Template.bind({});

TypedWordNew.args = {
  word: "Hello, I am Jonathan Heard",
};
