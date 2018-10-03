import React from 'react'
import styled from 'styled-components'

const HideText = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0 calc(100% - 1px) calc(100% - 1px) 0);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`

const svg = `<svg>Add proper svg sprites here</svg>`

// This sprite contains all site icons, use them this way: <Icon icon="chevron-right" />
export const Sprite = () => (
  <HideText dangerouslySetInnerHTML={{ __html: svg }} />
)
