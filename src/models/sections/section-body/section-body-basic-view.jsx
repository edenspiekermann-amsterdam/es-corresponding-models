import React from 'react'
import {Display, H1 } from '../../../app/typography/index'
import { Box, Flex } from '../../../app/layout/'
import { Column, Row } from '../../../app/layout/index'

export const SectionBodyBasicView = props => (
  <Row>
    <Column>
      <H1>{props.title}</H1>
      <Display>Display Test</Display>
      <Flex justifyContent='center'>
        <Box width={1/1} maxWidth={1/2}>
          {props.bodyText}
        </Box>
      </Flex>
    </Column>
  </Row>
)
