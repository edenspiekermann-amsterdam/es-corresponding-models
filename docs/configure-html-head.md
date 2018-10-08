# Configuring HTML Head elements

Data can be added to the HTML `<Head>` element by using a `setHtmlHeadFrom`
object. The keys of this object correspond to the props of `<AppHead>` defined
in [head.jsx](./src/app/head.jsx)

A single source string can be used. This example adds a title and a description.
```
  ...
  {
    model: Footer,
    // setHtmlHeadFrom could be on any model as long as we have the data present
    setHtmlHeadFrom: {
      title: 'HomeLayout.response.item.fields.seoTitle',
      description: 'HomeLayout.response.item.fields.seoDescription',
    },
  },
  ...
```

An array can be used to concatenate two fields together. The strings are
concatenated with ` - ` in between. This example adds a title from two sources
and a description from a single source.
```
  ...
    model: Footer,
    // setHtmlHeadFrom could be on any model as long as we have the data present
    setHtmlHeadFrom: {
      title: [
        'HomeLayout.response.item.fields.seoTitle',
        'Item.response.fields.title',
      ],
      description: 'Item.response.fields.description',
    },
  ...
```

