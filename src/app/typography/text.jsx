import styled from 'styled-components'
import tag from 'clean-tag'

import { appTheme } from '../theme'

import {
  color,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  space,
  textStyle,
  style,
} from 'styled-system'

const lineHeight = style({
  prop: "lineHeight",
  cssProperty: "lineHeight"
})

export const Text = styled(tag)`
  ${color}
  ${display}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${textAlign}
  ${space}
  ${textStyle}
`
Text.defaultProps = {
  theme: appTheme,
  lineHeight: [0, 1],
  fontSize: [0, 1],
}
