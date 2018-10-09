import * as contentful from '../../contentful/contentful'
import * as tools from '../../app/tools'

import { SectionFooter } from './section-footer/section-footer'
import { SectionBody} from './section-body/section-body'
import { SectionOpener } from './section-opener/section-opener'

// Translate className string into connected Section
const sectionClasses = {
  SectionFooter: contentful.connect(SectionFooter),
  SectionBody: contentful.connect(SectionBody),
  SectionOpener: contentful.connect(SectionOpener),
}

export const ListOfSections = props => {
  let sections = Object.keys(props.sections)
  sections = sections.map(tools.capitalizeFirstLetter)
  let i = 0
  const listOfSections = sections.map(compString => {
    const Comp = sectionClasses[compString]
    return (
      <Comp
        key={i++}
        layoutState={props.layoutState}
        layoutHandlers={props.layoutHandlers}
        appState={props.appState}
        appHandlers={props.appHandlers}
      />
    )
  })
  return listOfSections
}
