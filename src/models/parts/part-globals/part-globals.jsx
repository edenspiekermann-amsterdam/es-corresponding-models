// This section is not a React Component and is not rendered. It will fetch global
// data to be available for other sections (e.g. by using copyDataFrom)

export class PartGlobals {
  static modelName = 'PartGlobals'
  static query = {
    fields: { content_type: 'partGlobals', 'fields.version': '1' },
    clientMethod: 'getEntries',
    adapter: data => data.items[0],
  }
}
