import * as contentful from '../../../contentful/contentful'
import React from 'react'
import {H2, Paragraph} from '../../../app/typography'
import {Column, Row} from '../../../app/layout'

import {PartNavigation} from '../../parts/part-navigation/part-navigation'

const ConnectedPartNavigation = contentful.connect(PartNavigation)

export const SectionOpenerBasicView = props => (
  <Row>
    <Column width={[1, (1 / 1.1), (1 / 1.25)]} maxWidth='60em' ml='auto' mr='auto'>
      <ConnectedPartNavigation />
      <H2>SectionOpenerBasicView</H2>
      <Paragraph>Title: {props.title} Variation: {props.variation}</Paragraph>
    </Column>
  </Row>
)
