import * as contentful from '../../../contentful/contentful'
import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../../app/typography'
import { Column, Row } from '../../../app/layout'

import { PartNavigation } from '../../parts/part-navigation/part-navigation'
const ConnectedPartNavigation = contentful.connect(PartNavigation)

const OpenerContainer = styled.div`
  position: relative;
`;

export const SectionOpenerBasicView = props => (
  <OpenerContainer>
    <ConnectedPartNavigation />
    <H1>SectionOpenerBasicView</H1>
    <Row>
      <Column>Title: {props.title} </Column>
      <Column>Variation: {props.variation} </Column>
    </Row>
  </OpenerContainer>
)
