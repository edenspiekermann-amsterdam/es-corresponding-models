import { Component } from 'react'

import { SectionOpenerBasicView } from './section-opener-basic-view'
import { SectionOpenerAnotherView } from './section-opener-another-view'

import * as VARIATIONS from './section-opener-contentful-variations'

const VariationNotFound = props => <div>Variation "{props.variation}" not found</div>

const variations = {}

variations[VARIATIONS.SectionOpenerBasicView] = SectionOpenerBasicView
variations[VARIATIONS.SectionOpenerAnotherView] = SectionOpenerAnotherView

export class SectionOpener extends Component {
  static modelName = 'SectionOpener'

  static optionalModel = true
  static query = {
    fields: { content_type: 'sectionOpener', 'sys.id': ':id' },
    clientMethod: 'getEntries',
    adapter: data => data.items[0],
  }

  render() {
    const props = this.props.response.fields

    const View = variations[props.variation] || VariationNotFound

    return (
      <View
        title={props.title}
        variation={props.variation}
      />
    )
  }
}
