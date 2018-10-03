import styled from 'styled-components'

import { appTheme } from '../theme'

import {
  alignItems,
  color,
  flex,
  flexDirection,
  flexWrap,
  fontSize,
  height,
  justifyContent,
  position,
  bottom,
  left,
  right,
  top,
  space,
  width,
} from 'styled-system'

export const Flex = styled.div`
  display: flex;
  ${alignItems}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${fontSize}
  ${height}
  ${justifyContent}
  ${position}
  ${bottom}
  ${left}
  ${right}
  ${top}
  ${space}
  ${width}
`

Flex.defaultProps = {
  theme: appTheme,
}
