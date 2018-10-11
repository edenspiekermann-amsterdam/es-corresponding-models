
# Architecture

## Project tree

```
.
│
└── kubernetes                   - kubernetes config files for deployment
└── pages                        - next.js single index.jsx app entry point
└── server
│   └── express.js               - node.js express production server
└── src
│   └── app                      - app specific code like theme, store and fonts
│   |   └── icon                 - themed icon elements like icon and logo
│   |   └── layout               - themed layout elements like row and column
│   |   └── typography           - themed typography elements like h1 and text
|   |
│   └── contentful               - Contentful client code
│   └── layouts                  - Similar to pages. See below
│   └── models                   - Similar to page sections. See below
|       └── content              - Content referred to by a url slug
|       └── parts                - Content referred to by a section
|       └── sections             - Building blocks of a layout
│   └── primitives               - Similar to section paragraphs. See below
│   └── router                   - next-routes related code
│   └── shared-views             - sub views of the main model view. See below
|                                  in 'Model shared views'
│
└── static                       - next.js static folder served as /static
└── .babelrc                     - next.js babel configuration
└── Dockerfile                   - docker script to build for deployment
└── next.config.js               - next.js configuration
└── package.json
```


### Nextjs: index.jsx

The app uses [next.js](https://github.com/zeit/next.js/) and
[next-routes](https://www.npmjs.com/package/next-routes). Next comes with
filesystem routing. Each file in `/pages` equals to a route.

This project does not use this router and defines a single
[index.jsx](/pages/index.jsx) page in `/pages`. Routes for this project are
defined in [routes-list.js](/src/router/routes-list.js).

All page render starts at `index.js` and follow these steps:

- Call `index.js`
- Lookup routeName in [routes-list.js](/src/router/routes-list.js) by current
  URL
- Get models for this route from `routeModels` defined in
  [index.jsx](/pages/index.jsx)
- Fetch data for all models in this route
- Render first model (Layout) for this route.

### Layouts (/src/layouts)

For this project, layouts are the website pages. Each layout has a corresponding
Contentful Layout entry. The most important fields of a layout are:

- id: this is equal to the route name
- url: not used yet, can be used to build a dynamic
  [routes-list.js](/src/router/routes-list.js)
- components: an array of Contentful Models to be rendered (see Models below)

See also: [layout data fetching](./fetching-data.md#layout-data-fetching)

### Models (/src/models)

Each model must always correspond to a Contentful model. Hence the name. There
are three types of models in the models folder:

1. content
2. parts
3. sections

To be clear, a layout is also a Contenful model. Layouts are special models
because they group other models. The responsibility of a Layout model is to
fetch data and render the containing models. That is why they are treated
differently and stored elsewhere. Here is a short description of the other 3
model types:

## Sections
Sections are the building blocks that are used within layouts. If we think of a
layout as a web page, the sections are the openers, bodies, and footers of the
page. You can think of them as the paragraphs of the page.

## Parts
Parts are smaller components or tools that can be used within a section, such as
a navigation bar. Parts are loaded from Contentful by using a query that depends
on a field in the section eg. part ID.

## Content
This is a future improvement. Content is anything that is not a part or a
section but has a React component with a corresponding Contentful model. Content
is loaded from Contentful by using a query that depends on a dynamic part in the
URL [(slug)](https://yoast.com/slug/). For example, one of many articles.

All models have a `model.jsx` and a main `model-view.jsx`. The `model.jsx`
defines the query, adds model options like `optionalModel`, converts the
Contentful response into clean props and renders the separate view with the
clean props from `model-view.jsx`.

```
export class Model extends Component {
  ...
  render() {
    const props = this.props.response.fields
    return (
      <ModelView
        title={ props.object ? props.object.title : '' }
        otherProp={ props.long.path.here.otherProp }
      />
    )
  }
}
```

```
export const ModelView = props => (
  <div>
    <h1>{props.title}</h1>
  </div>
)
```

#### Model shared views

If a model contains views that are shared with other models they are kept in
`/src/shared-views`. Views that are local to the main model view are kept in the
same folder as the main view.

See also: [model data fetching](./fetching-data.md#model-data-fetching)

### Primitives

Primitives are the blocks to build views from. Look at primitives as words or sentences within paragraphs. They are in fact reusable React elements.

Because of the many ways of creating React elements, use these best practices to
keep the primitives organized:

- A file can contain many elements. Only export one element per file and use the
  same name for the file as for the exported element. This makes clear what to
  expect in that file.
- When grouping files into a folder use one of the filenames for the foldername.
  This prevents grouping files without a distinct function.
- Group all code based on (primitive) functionality. Styles and element code
  best go in the same file. Reusability of styling is accomplished by reusing
  primitives, not by reusing styling.
- Site wide functionality accross all primitives like e.g. typography lives in
  `/src/app`.
