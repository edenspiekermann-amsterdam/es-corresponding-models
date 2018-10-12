import React from 'react'
import {H2, Paragraph} from '../../../app/typography/index'
import {Box, Column, Row} from '../../../app/layout/index'

export const SectionBodyAnotherView = props => (
  <Row>
    <Column width={[1, (1 / 1.1), (1 / 1.25)]} maxWidth='60em' ml='auto' mr='auto'>
        <H2>{props.title}</H2>
        <Paragraph>{props.bodyText}</Paragraph>
    </Column>
  </Row>
)
