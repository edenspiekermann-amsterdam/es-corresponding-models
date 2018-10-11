import { Component } from 'react'

import {SectionBodyBasicView} from './section-body-basic-view'
import {SectionBodyAnotherView} from './section-body-another-view'

import * as VARIATIONS from './section-body-contentful-variations'

const VariationNotFound = props => <div>Variation "{props.variation}" not found</div>

const variations = {}

variations[VARIATIONS.SectionBodyBasicView] = SectionBodyBasicView
variations[VARIATIONS.SectionBodyAnotherView] = SectionBodyAnotherView

export class SectionBody extends Component {
  static modelName = 'SectionBody'
  static optionalModel = true
  static query = {
    fields: { content_type: 'sectionBody', 'sys.id': ':id' },
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
        bodyText={props.bodyText}
      />
    )
  }
}
