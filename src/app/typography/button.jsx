import styled from 'styled-components'

import { appTheme } from '../theme'

import {
  buttonStyle,
} from 'styled-system'

export const Button = styled.button`
  /* reset-input */
  background: transparent none;
  border: 0;
  border-radius: 0;
  margin: 0;
  min-width: 0;
  padding: 0;
  text-align: left;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  /* /reset-input */

  color: inherit;
  text-decoration: inherit;
  ${buttonStyle}
`

Button.defaultProps = {
  theme: appTheme,
}
