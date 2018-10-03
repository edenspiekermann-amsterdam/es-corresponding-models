import styled from 'styled-components'
import tag from 'clean-tag'

import { appTheme } from '../../theme'

import {
  color,
  fontSize,
  fontWeight,
  space,
  textStyle,
  responsiveStyle,
} from 'styled-system'

const lineHeight = responsiveStyle({
  prop: "lineHeight",
  cssProperty: "lineHeight"
})

// The main feature here is responsive headers without hassle. The major
// drawback is that we loose the standard markup headers: h1, h2, etc
// Question: is this still a drawback for SEO?
export const Heading = styled(tag)`
  ${space}
  ${textStyle}

  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
`
Heading.defaultProps = {
  theme: appTheme,
  fontSize: [4, 5, 6],
}
