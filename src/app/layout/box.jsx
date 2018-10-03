import styled from 'styled-components'
import tag from 'clean-tag'

import { appTheme } from '../theme'

import {
  bottom,
  color,
  display,
  flex,
  fontSize,
  left,
  position,
  right,
  space,
  top,
  width,
  height,
  zIndex,
} from 'styled-system'

export const Box = styled(tag)`
  box-sizing: border-box;

  ${bottom}
  ${color}
  ${display}
  ${flex}
  ${fontSize}
  ${left}
  ${position}
  ${right}
  ${space}
  ${top}
  ${width}
  ${height}
  ${zIndex}
`

Box.defaultProps = {
  theme : appTheme,
}
