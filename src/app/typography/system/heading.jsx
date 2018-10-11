import styled from 'styled-components'
import tag from 'clean-tag'

import { appTheme } from '../../theme'

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textStyle,
  style,
} from 'styled-system'

// The main feature here is responsive headers without hassle. The major
// drawback is that we loose the standard markup headers: h1, h2, etc
// Question: is this still a drawback for SEO?
export const Heading = styled(tag)`
  ${space}
  ${textStyle}
  ${fontFamily}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
`
Heading.defaultProps = {
  theme: appTheme,
  fontFamily: 'sans',
  color: 'emperor',
}
