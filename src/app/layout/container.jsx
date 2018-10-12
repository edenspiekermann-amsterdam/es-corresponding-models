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
  ${alignItems}
  ${display}
  ${flexWrap}
  ${justifyContent}
  ${space}
  ${textStyle}
`

Container.defaultProps = {
  mx: 'auto',
  px: ['16px', '20px', '24px'],
  theme: appTheme,
  textStyle: 'base',
}
