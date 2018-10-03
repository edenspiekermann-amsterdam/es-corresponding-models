import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from 'styled-system'

import { appTheme } from '../theme'

const sizes = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
  huge: '3rem',
}

const Svg = styled.svg`
  ${color}
  display: inline-block;
  margin: 0.25rem;
  max-width: 100%;
  transition: color 0.25s ease;
  vertical-align: middle;
  height: ${({ size }) => sizes[size]};
  width: ${({ size }) => sizes[size]};
`

export const Icon = props => {
  return (
    <Svg
      aria-label={props.label}
      color={props.color}
      onClick={props.onClick}
      size={props.size}
    >
      <use xlinkHref={'#icon-' + props.icon} />
    </Svg>
  )
}

Icon.defaultProps = {
  icon: 'arrow-left',
  size: 'small',
}

Icon.propTypes = {
  /** Name of the #id to be referenced in a SVG icon sprite. */
  icon: PropTypes.string.isRequired,
  /** Size of the Icon from Design specifications (large, medium, small). */
  size: PropTypes.oneOf(['huge', 'large', 'medium', 'small']).isRequired,
}
