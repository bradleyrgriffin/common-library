import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../Button'

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
    },
} as Meta

export const Default = () => <Button primary>Button</Button>
export const Secondary = () => <Button backgroundColor="red">Button</Button>
