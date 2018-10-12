import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

import {H2} from '../../../app/typography'
import {Link as NextLink} from '../../../router/next-routes';

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
    display: block;
    font-size: 2rem;
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
        <NextLink route={route.fields.id}>
          <a>{(route.fields.id, route.fields.title)}</a>
        </NextLink>
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
