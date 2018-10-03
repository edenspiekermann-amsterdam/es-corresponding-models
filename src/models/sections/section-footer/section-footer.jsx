import { Component } from 'react'
import { SectionFooterView as View } from './section-footer-view'

export class SectionFooter extends Component {
  static modelName = 'Footer'
  static query = {
    fields: { content_type: 'sectionFooter', 'sys.id': ':id' },
    clientMethod: 'getEntries',
  }
  render() {
    const props = this.props.response.items[0].fields
    return (
      <View
        title={props.title}
        copyrightNotice={props.copyrightNotice}
      />
    )
  }
}
