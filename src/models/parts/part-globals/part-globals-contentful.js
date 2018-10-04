/**
 * Part Globals Contentful migration
 *
 * To run this migration from the command line, create a ~/.contentfulrc.json for the
 * development enmvironment and use:
 * contentful space migration --environment-id=development part-globals-contentful.js
 *
 *
 * Fields
 * ======
 * siteName (Symbol)
 * siteDescription (Symbol)
 * version (Integer)
 */

const migrations = require('../../../contentful/migrations')

module.exports = async function(migration) {
  await migrations.createOrEditContentType({
    migration,
    type: 'partGlobals',
    name: 'Part Globals',
    description: 'Globals section',
    fields: {
      siteName: {
        specs: {
          name: 'Site name',
          type: 'Symbol',
          required: true,
          validations: [{ size: { min: 0, max: 255 } }],
        },
      },
      siteDescription: {
        specs: {
          name: 'Site description',
          type: 'Symbol',
          required: true,
          validations: [{ size: { min: 0, max: 255 } }],
        },
      },
      version: {
        specs: {
          name: 'Version',
          type: 'Integer',
          required: true,
          validations: [{ range: { min: 0, max: 100 } }],
        },
      },
    },
  })
}
