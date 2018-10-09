import { Component } from 'react'

import { pageAdapter } from './page-adapter'
import { ListOfSections } from '../models/sections/list'

import { SectionOpener } from '../models/sections/section-opener/section-opener'
import { SectionBody } from '../models/sections/section-body/section-body'
import { SectionFooter } from '../models/sections/section-footer/section-footer'
import { PartGlobals } from '../models/parts/part-globals/part-globals'
import { PartNavigation } from '../models/parts/part-navigation/part-navigation'

export class LayoutHome extends Component {
  static modelName = 'LayoutHome'
  static query = {
    fields: { content_type: 'layout', 'fields.id': 'home' },
    clientMethod: 'getEntries',
    adapter: pageAdapter,
  }
  render() {
    return (
      <ListOfSections
        appHandlers={this.props.appHandlers}
        appState={this.props.appState}
        sections={this.props.response.sections}
      />
    )
  }
}

export const homeModels = [
  {
    model: LayoutHome,
  },
  {
    model: PartGlobals,
  },
  {
    model: SectionOpener,
    copyDataFrom: {
      globalsCopy: 'PartGlobals.response.fields',
    },
    queryParametersFrom: {
      id: 'LayoutHome.response.sections.sectionOpener.sys.id',
    },
  },
  {
    model: PartNavigation,
    queryParametersFrom: {
      id: 'SectionOpener.response.fields.navigation.sys.id',
    },
  },
  {
    model: SectionBody,
    queryParametersFrom: {
      id: 'LayoutHome.response.sections.sectionBody.sys.id',
    },
  },
  {
    model: SectionFooter,
    queryParametersFrom: {
      id: 'LayoutHome.response.sections.sectionFooter.sys.id',
    },
    // setHtmlHeadFrom could be on any section as long as we have the data present
    setHtmlHeadFrom: {
      title: 'LayoutHome.response.item.fields.seoTitle',
      description: 'LayoutHome.response.item.fields.seoDescription',
    },
  },
]
