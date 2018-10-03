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
    },
  })
}
