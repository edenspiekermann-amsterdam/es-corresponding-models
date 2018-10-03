import styled from 'styled-components'
import tag from 'clean-tag'

import { appTheme } from '../theme'

import {
  color,
  display,
  fontSize,
  fontWeight,
  textAlign,
  space,
  textStyle,
  responsiveStyle,
} from 'styled-system'

const lineHeight = responsiveStyle({
  prop: "lineHeight",
  cssProperty: "lineHeight"
})

export const Text = styled(tag)`
  ${color}
  ${display}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${textAlign}
  ${space}
  ${textStyle}
`
Text.defaultProps = {
  theme: appTheme,
  lineHeight: ['24px', '32px'],
  fontSize: [1, 2],
}
