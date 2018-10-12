import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

import {H2} from '../../../app/typography'

const MenuContainer = styled.nav`
  position: relative;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  display: inline-block;
  padding: 0.5rem;

  @media (max-width: 767px) {
    font-size: 20;
  }
`;

export class PartNavigationView extends Component {
  constructor(props) {
    super(props);

    this.state = {isActive: false};
    this.toggleIsActive = this.toggleIsActive.bind(this);
  }

  toggleIsActive() {
    this.setState(state => ({isActive: !state.isActive}));
  }

  render() {
    const routes = this.props.routes;

    const linkList = Array.from(routes).map(route => (
      <MenuItem key={route.sys.id}>
          <a href="/">{(route.fields.title)}</a>
      </MenuItem>
    ));

    return (
      <Fragment>
        <H2>PartNavigation</H2>
        <MenuContainer>
          <MenuList aria-expanded={this.state.isActive}>{linkList}</MenuList>
        </MenuContainer>
      </Fragment>
    );
  }
}
