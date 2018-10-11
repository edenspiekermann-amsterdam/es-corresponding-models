/**
 * Contentful migration
 *
 * To run this migration from the command line, create a ~/.contentfulrc.json for the
 * development enmvironment and use:
 * contentful space migration --environment-id=development section-body-contentful.js
 *
 *
 * Fields
 * ======
 * title (Symbol)
 * bodyText (Text)
 */

const migrations = require('../../../contentful/migrations')
const VARIATIONS = require('./section-body-contentful-variations')


module.exports = async function(migration) {
  await migrations.createOrEditContentType({
    migration,
    type: 'sectionBody',
    name: 'Section Body',
    description: 'Body section',
    fields: {
      title: {
        specs: {
          name: 'Title',
          type: 'Symbol',
          required: true,
          validations: [{ size: { min: 0, max: 255 } }],
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
          name: 'Body variation',
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
          helpText: 'Select section-body',
        },
      },
      bodyText: {
        specs: {
          name: 'Body Text',
          type: 'Text',
          required: true,
          validations: [{ size: { min: 0, max: 50000 } }],
        },
      },
    },
  })
}
