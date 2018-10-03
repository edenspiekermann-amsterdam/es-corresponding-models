import styled from 'styled-components'
import { appTheme } from '../theme'

import {
  alignItems,
  display,
  flexWrap,
  justifyContent,
  space,
  textStyle,
} from 'styled-system'

export const Container = styled.div`
  max-width: 1980px;
  overflow-x: hidden;

  ${alignItems}
  ${display}
  ${flexWrap}
  ${justifyContent}
  ${space}
  ${textStyle}
`

Container.defaultProps = {
  mx: 'auto',
  px: ['18px', '16px', '24px'],
  theme: appTheme,
  textStyle: 'base',
}
