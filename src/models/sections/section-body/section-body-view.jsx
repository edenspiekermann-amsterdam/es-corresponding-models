import React, { Component } from 'react'
import { H1, Paragraph } from '../../../app/typography/index'
import {Column, Row } from '../../../app/layout/index'

export const SectionBodyView = props => (
  <div>
    <H1>Body</H1>
    <Row>
      <Column>{props.title} </Column>
    </Row>
    <Row>
      <Column><Paragraph>{props.bodyText}</Paragraph></Column>
    </Row>
  </div>
)
