import { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { appTheme } from '../../app/theme'
import { Icon } from '../../app/icon/icon'

const BackLinkAnchor = styled.a`
  cursor: pointer;
`

const BackLinkText = styled.span`
  border-bottom: solid 2px transparent;
  transition: border-color 300ms ease;

  a:hover > & {
    border-bottom-color: ${appTheme.colors.action};
  }
`

export class BackLink extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  render() {
    return (
      <BackLinkAnchor onClick={this.context.router.back}>
        <Icon color="action" icon="arrow-left" />
        <br />
        <BackLinkText>Terug</BackLinkText>
      </BackLinkAnchor>
    )
  }
}
