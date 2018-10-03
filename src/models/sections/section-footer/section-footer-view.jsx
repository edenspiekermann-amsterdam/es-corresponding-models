import React, { Component } from 'react'
import { H1 } from '../../../app/typography/index'
import { Box, Column, Row } from '../../../app/layout/index'

export const SectionFooterView = props => (
  <div>
    <H1>Footer</H1>
    <Row>
      <Column>{props.title} </Column>
      <Column>{props.copyrightNotice} </Column>
    </Row>
  </div>
)
