import React from 'react'
import styled from 'styled-components'
import tag from 'clean-tag'

import { appTheme } from '../theme'

import {
  alignItems,
  alignSelf,
  color,
  display,
  flex,
  flexDirection,
  flexWrap,
  fontSize,
  height,
  minHeight,
  maxHeight,
  justifyContent,
  order,
  space,
  width,
} from 'styled-system'

export const Row = styled(tag)`
  ${alignItems}
  ${alignSelf}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${fontSize}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${justifyContent}
  ${order}
  ${space}
  ${width}
`

Row.defaultProps = {
  mx: ['-16px', '-20px', '-24px'],
  theme: appTheme,
}

Row.propTypes = {
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
  ...minHeight.propTypes,
  ...maxHeight.propTypes,
  ...justifyContent.propTypes,
  ...order.propTypes,
  ...space.propTypes,
  ...width.propTypes,
}
