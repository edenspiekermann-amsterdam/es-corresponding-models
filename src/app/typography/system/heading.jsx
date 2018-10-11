import styled from 'styled-components'
import tag from 'clean-tag'

import { appTheme } from '../../theme'

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  space,
  textStyle,
  style,
} from 'styled-system'

const lineHeight = style({
  prop: "lineHeight",
  cssProperty: "lineHeight"
})

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
  fontSize: [4, 5, 6],
}
