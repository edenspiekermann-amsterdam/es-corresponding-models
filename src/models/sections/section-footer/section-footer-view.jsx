import React from 'react'
import {H2, Paragraph} from '../../../app/typography/index'
import {Box, Column, Row} from '../../../app/layout/index'

export const SectionFooterView = props => (
  <Row>
    <Column width={[1, (1 / 1.1), (1 / 1.25)]} maxWidth='60em' ml='auto' mr='auto'>
      <Box width={1 / 1} maxWidth={1 / 2}>
        <H2>Footer</H2>
        <Paragraph>{props.title} {props.copyrightNotice}</Paragraph>
      </Box>
    </Column>
  </Row>
)
