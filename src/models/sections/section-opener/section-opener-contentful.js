/**
 * Contentful migration
 *
 * To run this migration from the command line, create a ~/.contentfulrc.json for the
 * development enmvironment and use:
 * contentful space migration --environment-id=development point-to-this-file.js
 *
 *
 * Fields
 * ======
 * title (Symbol)
 * variation (Symbol)
 * navigation (Reference to One)
 */

const migrations = require('../../../contentful/migrations')
const VARIATIONS = require('./section-opener-contentful-variations')

module.exports = async function (migration) {
  await migrations.createOrEditContentType({
    migration,
    type: 'sectionOpener',
    name: 'Section Opener',
    description: 'Opener section',
    fields: {
      title: {
        specs: {
          name: 'Title',
          type: 'Symbol',
          required: true,
        },
        widgetId: 'singleLine',
        settings: [
          {
            helpText: 'Title used by Contentful'
          }
        ],
      },
      variation: {
        specs: {
          name: 'Opener variation',
          type: 'Symbol',
          required: true,
          validations: [
            {
              in: Object.values(VARIATIONS),
            },
          ],
        },
        widgetId: 'dropdown',
        settings: {
          helpText: 'Select section-opener',
        },
      },
      navigation: {
        specs: {
          name: 'Navigation',
          required: false,
          type: 'Link',
          linkType: 'Entry',
          validations: [
            {
              linkContentType: ['partNavigation'],
            },
          ],
        },
        widgetId: 'entryLinkEditor',
        settings: [
          {
            helpText: 'Select the part-navigation for this section',
          },
        ],
      },
    },
  })
}
