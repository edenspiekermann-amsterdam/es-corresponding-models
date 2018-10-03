import * as contentful from '../../../contentful/contentful'
import { Fragment } from 'react'
import { H1 } from '../../../app/typography'
import { Box, Column, Row } from '../../../app/layout'

import { PartNavigation } from '../../parts/part-navigation/part-navigation'
const ConnectedPartNavigation = contentful.connect(PartNavigation)

export const SectionOpenerBasicView = props => (
  <Fragment>
    <H1>SectionOpenerBasicView</H1>
    <ConnectedPartNavigation />
    <Row>
      <Column>Title: {props.title} </Column>
      <Column>Variation: {props.variation} </Column>
    </Row>
  </Fragment>
)
