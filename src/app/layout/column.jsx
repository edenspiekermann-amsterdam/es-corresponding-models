import React from 'react'
import styled from 'styled-components'
import tag from 'clean-tag'

import { appTheme } from '../theme'

import {
  alignSelf,
  color,
  display,
  flex,
  fontSize,
  height,
  maxHeight,
  order,
  space,
  textAlign,
  maxWidth,
  width,
  zIndex,
} from 'styled-system'

export const Column = styled(tag).attrs({
  px: props => typeof props.gutter !== 'undefined' ? props.gutter : props.px,
})`
  box-sizing: border-box;
  ${alignSelf}
  ${color}
  ${display}
  ${flex}
  ${fontSize}
  ${height}
  ${maxHeight}
  ${order}
  ${space}
  ${textAlign}
  ${width}
  ${maxWidth}
  ${zIndex}
`

Column.defaultProps = {
  gutter: ['18px', '16px', '24px'],
  theme: appTheme,
}

Column.propTypes = {
  ...alignSelf.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
  ...order.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
}
