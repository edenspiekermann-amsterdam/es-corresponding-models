/**
 * Layout Contentful migration
 *
 * To run this migration from the command line, create a ~/.contentfulrc.json for the
 * development enmvironment and use:
 * contentful space migration --environment-id=development layout-contentful.js
 *
 *
 * Fields
 * ======
 * title (Symbol)
 * seoTitle (Symbol)
 * seoDescription (Symbol)
 * id (Symbol)
 * url (Symbol)
 * sections (Array)
 */

const migrations = require('../contentful/migrations')

module.exports = async function (migration) {
  await migrations.createOrEditContentType({
    migration,
    type: 'layout',
    name: 'Layout',
    description: 'Top level layouts. Defines routes and references to components on a page.',
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
      seoTitle: {
        specs: {
          name: 'SEO Title',
          type: 'Symbol',
          required: true,
        },
        widgetId: 'singleLine',
        settings: [
          {
            helpText: 'Title used by search engines'
          }
        ],
      },
      seoDescription: {
        specs: {
          name: 'SEO Description',
          type: 'Symbol',
          required: true,
          validations: [
            {
              size: {min: 0, max: 155},
            }
          ],
        },
        widgetId: 'singleLine',
        settings: [
          {
            helpText: 'Description used by search engines'
          }
        ],
      },
      id: {
        specs: {
          name: 'ID',
          type: 'Symbol',
          required: true,
          validations: [
            {
              unique: true,
            }
          ],
        },
        widgetId: 'slugEditor',
        settings: [
          {
            helpText: 'System id for this layout'
          }
        ],
      },
      url: {
        specs: {
          name: 'Url',
          type: 'Symbol',
          required: true,
          validations: [
            {
              unique: true,
            }
          ],
        },
        widgetId: 'slugEditor',
        settings: [
          {
            helpText: 'Description used by search engines'
          }
        ],
      },
      sections: {
        specs: {
          name: 'Sections',
          type: 'Array',
          required: true,
          items: {
            type: 'Link',
            linkType: 'Entry',
            validations: [
              {
                linkContentType: ['sectionFooter','sectionOpener']
              }
            ]
          },
        },
        widgetId: 'entryLinksEditor',
        settings: [
          {
            helpText: 'Select sections'
          }
        ],
      },
    },
  })
}
