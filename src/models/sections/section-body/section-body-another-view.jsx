import React, { Component } from 'react'
import { H1, Paragraph } from '../../../app/typography/index'
import {Column, Row } from '../../../app/layout/index'

export const SectionBodyAnotherView = props => (
  <div>
    <H2>{props.title} </H2>
    <Row>
      <Column><Paragraph>{props.bodyText}</Paragraph></Column>
    </Row>
  </div>
)
