import { Component } from 'react'

import { pageAdapter } from './page-adapter'
import { ListOfSections } from '../models/sections/list'

import { SectionOpener } from '../models/sections/section-opener/section-opener'
import { SectionBody } from '../models/sections/section-body/section-body'
import { SectionFooter } from '../models/sections/section-footer/section-footer'
import { PartGlobals } from '../models/parts/part-globals/part-globals'
import { PartNavigation } from '../models/parts/part-navigation/part-navigation'

export class LayoutAnotherPage extends Component {
  static modelName = 'LayoutAnotherPage'
  static query = {
    fields: { content_type: 'layout', 'fields.id': 'anotherPage' },
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

export const anotherPageModels = [
  {
    model: LayoutAnotherPage,
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
      id: 'LayoutAnotherPage.response.sections.sectionOpener.sys.id',
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
      id: 'LayoutAnotherPage.response.sections.sectionBody.sys.id',
    },
  },
  {
    model: SectionFooter,
    queryParametersFrom: {
      id: 'LayoutAnotherPage.response.sections.sectionFooter.sys.id',
    },
    // setHtmlHeadFrom could be on any section as long as we have the data present
    setHtmlHeadFrom: {
      title: 'LayoutAnotherPage.response.item.fields.seoTitle',
      description: 'LayoutAnotherPage.response.item.fields.seoDescription',
    },
  },
]
