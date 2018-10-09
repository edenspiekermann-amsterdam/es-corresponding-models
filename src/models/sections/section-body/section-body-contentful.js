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
