import * as contentful from '../../../contentful/contentful'
import { Fragment } from 'react'
import { H1 } from '../../../app/typography'
import { Column, Row } from '../../../app/layout'

import { PartNavigation } from '../../parts/part-navigation/part-navigation'
const ConnectedPartNavigation = contentful.connect(PartNavigation)

export const SectionOpenerAnotherView = props => (
  <Fragment>
    <H1>SectionOpenerAnotherView</H1>
    <ConnectedPartNavigation />
    <Row>
      <Column>Title: {props.title} </Column>
      <Column>Variation: {props.variation} </Column>
    </Row>
  </Fragment>
)
