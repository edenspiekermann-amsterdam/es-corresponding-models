import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { space, height, maxHeight, minHeight } from 'styled-system'

const conditionalStyles = {
  gradient: css`
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: transparent;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 35%
      );
    }
  `,

  solid: css`
    position: relative;

    &::after {
      background-color: rgba(0, 0, 0, 0.2);
      bottom: 0;
      content: '';
      display: block;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  `,
}

const StyledImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  ${props =>
    props.objectFit &&
    css`
      object-fit: ${props.objectFit};
    `};
`

const StyledPicture = styled.picture`
  ${height}
  ${maxHeight}
  ${minHeight}
  ${space}
  ${props => conditionalStyles[props.overlay]}

  display: block;
`

export const Image = props => (
  <StyledPicture
    className={props.className}
    height={props.height}
    maxHeight={props.maxHeight}
    minHeight={props.minHeight}
    overlay={props.overlay}
    my={props.my}
  >
    <StyledImg alt={props.alt} src={props.src} objectFit={props.objectFit} />
  </StyledPicture>
)

Image.defaultProps = {
  alt: '',
  className: 'image',
  objectFit: 'cover',
  src: '//placehold.it/400',
}

Image.propTypes = {
  /** className of link for some CSS targeting (defaults to 'image'). */
  className: PropTypes.string.isRequired,
  /** object-fit CSS property value. */
  objectFit: PropTypes.string.isRequired,
  /** URL to source image. */
  src: PropTypes.string.isRequired,
}
