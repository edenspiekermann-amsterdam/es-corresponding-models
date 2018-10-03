import styled, { css } from 'styled-components'
import {
  buttonStyle,
} from 'styled-system'

import { appTheme } from '../theme'
import { Icon } from '../icon/icon'

const LinkWrapper = styled.span``

const LinkLabel = styled.span`
  color: inherit;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  ${buttonStyle}
`

const IconWrapper = styled.span`
  display: inline-block;
  transition: transform 300ms ease;

  *:hover > & {
    ${ ({ iconPosition }) =>
      (iconPosition === 'left')
        ? css`transform: translate3d(-1rem, 0, 0);`
        : css`transform: translate3d(1rem, 0, 0);`
    }
  }
`

export const Link = ({ icon, iconPosition, url, ...rest }) => (
  <LinkWrapper>
    { icon && !iconPosition && (
      <Icon icon={ icon } />
    )}

    { icon && iconPosition === 'left' && (
      <IconWrapper iconPosition={iconPosition}>
        <Icon icon={ icon } />
      </IconWrapper>
    )}

    <LinkLabel { ...rest } />

    { icon && iconPosition === 'right'  && (
      <IconWrapper iconPosition={iconPosition}>
        <Icon icon={ icon } />
      </IconWrapper>
    )}
  </LinkWrapper>

)

Link.defaultProps = {
  theme: appTheme,
}
