import { Component } from 'react'
import { SectionBodyView as View } from './section-body-view'

export class SectionBody extends Component {
  static modelName = 'Body'
  static query = {
    fields: { content_type: 'sectionBody', 'sys.id': ':id' },
    clientMethod: 'getEntries',
  }
  render() {
    const props = this.props.response.items[0].fields
    return (
      <View
        title={props.title}
        bodyText={props.bodyText}
      />
    )
  }
}
