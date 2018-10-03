import React from 'react';
import { Component } from 'react';
import { PartNavigationView as View } from './part-navigation-view';

export class PartNavigation extends Component {
  static modelName = 'PartNavigation';
  static query = {
    fields: { content_type: 'partNavigation', 'sys.id': ':id' },
    clientMethod: 'getEntries',
    adapter: data => data.items[0],
  };

  render() {
    const fields = this.props.response.fields;

    return <View title={this.props.title} routes={fields.routes} />;
  }
}
