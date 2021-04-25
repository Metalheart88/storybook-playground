import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core'
import { withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>{story()}</Box>
  </ThemeProvider>
))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

addDecorator((story, context) => withConsole()(story)(context))

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  a11y: withA11y,
})
