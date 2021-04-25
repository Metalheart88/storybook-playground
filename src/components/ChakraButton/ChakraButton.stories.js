import React from 'react'
import { Button } from '@chakra-ui/core'
import { action, actions } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

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

export const Log = () => (
  <Button
    variantColor='blue'
    onClick={() => console.log('Button clicked', process.env.STORYBOOK_THEME)}
  >
    Log
  </Button>
)

export const Knobs = () => (
  <Button variantColor='purple' disabled={boolean('Disabled', false)}>
    {text('Label', 'Button Label')}
  </Button>
)
