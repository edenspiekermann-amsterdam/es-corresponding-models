import React from 'react'
<<<<<<< HEAD
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
=======
import {H2, Paragraph} from '../../../app/typography/index'
import {Box} from '../../../app/layout/'
import {Column, Row} from '../../../app/layout/index'

export const SectionBodyBasicView = props => (
  <Row>
    <Column width={[1, (1 / 1.1), (1 / 1.25)]} maxWidth='60em' ml='auto' mr='auto'>
      <Box width={1 / 1} maxWidth={1 / 2}>
        <H2>{props.title}</H2>
        <Paragraph>{props.bodyText}</Paragraph>
      </Box>
>>>>>>> dee27f5f61460cc6d9db886a4d384fcd7e1f76c5
    </Column>
  </Row>
)
