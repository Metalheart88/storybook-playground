import React from 'react'
import { Button } from '@chakra-ui/core'
import { action, actions } from '@storybook/addon-actions'

const ChakraButton = {
  title: 'Chakra/Button',
  component: Button,
}

export default ChakraButton

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
  variantColor: 'green',
  children: 'Success',
  onClick: action('Click handler'),
}

export const Danger = Template.bind({})
Danger.args = {
  variantColor: 'red',
  children: 'Danger',
  ...actions('onClick', 'onMouseOver'),
}
