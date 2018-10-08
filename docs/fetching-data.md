# Fetching Data

## Layout data fetching

Layouts define a `static query` on the layout class to prefetch data.

```
export class HomeLayout extends Component {
  static query = {
    fields: { content_type: 'layout', 'fields.id': 'home' },
    clientMethod: 'getEntries',
    adapter: pageAdapter,
  }
  render() {
  ...
```

The response is stored in the `StoreContext` with the layout modelName as key.

## Model data fetching

Optionally a model can just like a layout, define a `static query` on the layout
class to prefetch data. The response is also stored in the `StoreContext` with
the model modelName as key.

Models have more options to fetch data. Fetch info can be added to the
`routeModels` object defined in `pages/index.js`.

3 types of fetch info exist:

- [copyDataFrom](#copydatafrom)
- a query + [queryIdFrom](#copydatafrom)
- a query + [queryParametersFrom](#copydatafrom)

At render time, the `connect` function defined in
[contentful.jsx](/src/contentful/contentful.jsx) makes the prefetched data
available to a model. Models in the `routeModels` object defined in `index.js`
are automatically connected.

### copyDataFrom

Instead of a `static query` on the model, `copyDataFrom` can be used to copy
data from an already fetched model.

The key `copyDataFrom` has two possible forms:

- a single source string or
- an object with multiple destination and source combinations where the key is
  the destination folder and the value is the source path.

Single source string example:

```
export const homeLayoutModels = [
  {
    model: HomeLayout,
  },
  {
    model: Opener,
    copyDataFrom: 'HomeLayout.response.components.opener.fields',
  },
  ...
```

Object example:

```
  ...
  {
    model: Opener,
    copyDataFrom: {
      openerCopy: 'HomeLayout.response.components.opener.fields',
      anotherCopy: 'HomeLayout.response.components.another.fields',
    },
  }
  ...
```

### queryIdFrom

This fetches a single item, no includes. A `static query` on the model with
`clientMethod: 'getEntry'` is required.

The query defined on the model looks like this:

```
static query = {
  clientMethod: 'getEntry',
}
```

Below is an extract from `homeLayoutModels`. Before the query runs, the query id
for `getEntry` is set to the value found at
`HomeLayout.response.components.opener.sys.id`:

```
...
model: Opener,
queryIdFrom: 'HomeLayout.response.components.opener.sys.id',
...
```

### queryParametersFrom

This works with a required `static query` on the model with `clientMethod: 'getEntries'`.

The query fields on the model that start with a `:` are replaced with a value
from the data that is already fetched.

The query defined on the model looks like the query below. The `:id` field in
the query will be replaced.

If a value for the field that needs to be replace cannot be found, the
`parsePath` function will throw an error. This e.g. happens when a reference to
a model is optional. In that case the static property `optionalModel` can be set
to true.  The query will then only run if all query parameters can be resolved.

```
static optionalModel = true // Defaults to false
static query = {
  fields: { content_type: 'opener', 'sys.id': ':id' },
  clientMethod: 'getEntries',
  adapter: data => data.items[0]
}
```

Below is an extract from `homeLayoutModels`. Before the query runs, the `:id`
field in the query is replaced with the value found at
`HomeLayout.response.components.opener.sys.id`:

```
...
model: Opener,
queryParametersFrom: {
  id: 'HomeLayout.response.components.opener.sys.id',
}
...
```
