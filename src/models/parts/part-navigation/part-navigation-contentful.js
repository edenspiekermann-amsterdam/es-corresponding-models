// Contentful migration
//
// To run this migration from the command line, create a ~/.contentfulrc.json for the
// development enmvironment and use:
// contentful space migration --environment-id=development point-to-this-file.js

const migrations = require('../../../contentful/migrations')

module.exports = async function(migration) {
  await migrations.createOrEditContentType({
    migration,
    type: 'partNavigation',
    name: 'Part Navigation',
    description: 'Navigation section',
    fields: {
      title: {
        specs: {
          name: 'Title',
          type: 'Symbol',
          required: true,
        },
      },
      id: {
        specs: {
          name: 'ID',
          type: 'Symbol',
          required: true,
        },
      },
      routes: {
        specs: {
          name: 'Routes',
          type: 'Array',
          required: true,
          items: {
            type: 'Link',
            linkType: 'Entry',
            validations: [
              {
                linkContentType: ['layout'],
              },
            ],
          },
        },
        widgetId: 'entryLinksEditor',
        settings: [
          {
            helpText: 'Select part-navigation routes',
          },
        ],
      },
    },
  })
}
