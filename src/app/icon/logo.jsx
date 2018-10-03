import React from 'react'
import styled, { css } from 'styled-components'
import { themeGet } from 'styled-system'

import { Link as NextLink } from '../../router/next-routes'

import {
  color
} from 'styled-system'

const Svg = styled.svg`
  ${ color }

  display: inline-block;
  color: ${ themeGet('colors.base', 'black') };
  height: 20px;
  transition: color 0.25s ease, transform 0.25s ease;
  vertical-align: text-bottom;
  width: 98px;

  @media (min-width: 1024px) {
      transform-origin: left top;
    }

  ${ ({ size }) => size !== 'small' && css`
    @media (min-width: 768px) {
      color: ${ themeGet('colors.white', 'white') };

      ${ ({ isSticky }) => isSticky && css`
        color: ${ themeGet('colors.base', 'black') };
      ` }
    }

    @media (min-width: 1200px) {
      height: 72px;
      margin-left: 1.625rem;
      position: absolute;
      width: 348px;

      ${ ({ isSticky }) => isSticky && css`
        transform: scale3d(${1/3}, ${1/3}, 1);
      ` }
    }
  `}
`

export const Logo = ({ ...rest }) => (
  <NextLink route="home">
    <a>
      <Svg { ...rest }>
        <use xlinkHref="#icon-logo" />
      </Svg>
    </a>
  </NextLink>
)

Logo.defaultProps = {
  color: 'black', //themeGet('colors.base', 'black') does not work here?
  size: 'small',
}