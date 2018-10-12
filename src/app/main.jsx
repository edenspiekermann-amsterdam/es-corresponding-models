import React from 'react'
import { StickyContainer } from 'react-sticky'

import { ThemeProvider } from 'styled-components'

import { Container } from './layout'
import { appTheme } from './theme'

import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { webfonts } from './fonts'

injectGlobal`
${webfonts}
${styledNormalize}

*,
*::after,
*::before {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body {
  color: #2D353C;
}

`

export class AppMain extends React.Component {
  render() {
    return (
      <ThemeProvider theme={appTheme}>
        <StickyContainer>
          <Container>
            {this.props.children}
          </Container>
        </StickyContainer>
      </ThemeProvider>
    )
  }
}
