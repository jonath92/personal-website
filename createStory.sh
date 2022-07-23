#!/bin/bash

COMPONENT_PATH=$1

echo $COMPONENT_PATH 

FULL_NAME=$(basename $COMPONENT_PATH)
COMPONENT_NAME=${FULL_NAME%.*}
STORY_PATH=${COMPONENT_PATH/'.tsx'/'.stories.tsx'}


cat << EOF > $STORY_PATH
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import createTitle from '@parachutehome/create-title.macro'
import { $COMPONENT_NAME as ${COMPONENT_NAME}Component } from './$COMPONENT_NAME'
export default {
    title: createTitle(), 
    component: ${COMPONENT_NAME}Component
} as ComponentMeta<typeof ${COMPONENT_NAME}Component>
const Template: ComponentStory<typeof ${COMPONENT_NAME}Component> = (args) => (
    <${COMPONENT_NAME}Component {...args} />
)  
export const $COMPONENT_NAME = Template.bind({}) 
