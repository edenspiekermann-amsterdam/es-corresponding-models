import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';

import { H1 } from '../../../app/typography'
import { Link as NextLink } from '../../../router/next-routes';

const MenuContainer = styled.nav`
  position: relative;
`;

const MenuToggle = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  border: solid 8px transparent;
  height: 36px;
  line-height: 36px;
  margin: 2px;
  overflow: hidden;
  text-indent: -99rem;
  width: 36px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25em;
    width: 1em;
    height: 0.15em;
    background: black;
    box-shadow: 0 0.25em 0 0 black, 0 0.5em 0 0 black;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
`;

const MenuItem = styled.li`
  display: inline-block;
  padding: 0.5rem;

  @media (max-width: 767px) {
    display: block;
    font-size: 2rem;
  }
`;

export class PartNavigationView extends Component {
  constructor(props) {
    super(props);

    this.state = { isActive: false };
    this.toggleIsActive = this.toggleIsActive.bind(this);
  }

  toggleIsActive() {
    this.setState(state => ({ isActive: !state.isActive }));
  }

  render() {
    const routes = this.props.routes;

    const linkList = Array.from(routes).map(route => (
      <MenuItem key={route.sys.id}>
        <NextLink route={route.fields.id}>
          <a>{(route.fields.id, route.fields.title)}</a>
        </NextLink>
      </MenuItem>
    ));

    return (
      <Fragment>
        <H1>PartNavigation</H1>
        <MenuContainer>
          <MenuToggle aria-pressed={this.state.isActive} onClick={this.toggleIsActive}>
            {this.state.isActive ? 'Close' : 'Open'} menu
          </MenuToggle>
          <MenuList aria-expanded={this.state.isActive}>{linkList}</MenuList>
        </MenuContainer>
      </Fragment>
    );
  }
}
