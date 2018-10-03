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
 * copyrightNotice (Symbol)
 */

const migrations = require('../../../contentful/migrations')

module.exports = async function(migration) {
  await migrations.createOrEditContentType({
    migration,
    type: 'sectionFooter',
    name: 'Section Footer',
    description: 'Footer section',
    fields: {
      title: {
        specs: {
          name: 'Title',
          type: 'Symbol',
          required: true,
          validations: [{ size: { min: 0, max: 255 } }],
        },
      },
      copyrightNotice: {
        specs: {
          name: 'Copyright Notice',
          type: 'Symbol',
          required: true,
          validations: [{ size: { min: 0, max: 255 } }],
        },
      },
    },
  })
}
