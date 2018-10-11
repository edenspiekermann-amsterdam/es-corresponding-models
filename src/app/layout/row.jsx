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
  box-sizing: border-box;
  display: flex;
  text-align: center;

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
  flexWrap: 'wrap',
  mx: ['-18px', '-16px', '-24px'],
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
