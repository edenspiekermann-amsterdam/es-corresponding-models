
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
│   └── contentful               - contentful client code
│   └── layouts                  - Similar to pages. See below
│   └── models                   - Similar to page sections. See below
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
Contentful Layout entry. Most important fields of a layout are:

- id: this is equal to the route name
- url: not used yet, can be used to build a dynamic
  [routes-list.js](/src/router/routes-list.js)
- components: an array of Contentful Models to be rendered

See also: [layout data fetching](#layout-data-fetching)

### Models (/src/models)

A layout is built up out of models. Look at a layout as a page. Models are the
sections of the pages. Each model corresponds to a Contentful model. Hence the
name.

To be clear, a layout is also a Contenful model. Layouts are special models
because they group other models. The responsibility of a Layout model is to
fetch data and render the containing models. That is why they are treated
differently and stored elsewhere.

A model has a `model.jsx` and a main `model-view.jsx`. The `model.jsx` converts
the Contentful response into clean props for the main `model-view.jsx`.

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

See also: [model data fetching](#model-data-fetching)

### Primitives

Primitives are the blocks to build sections from. Look at primitives as the
paragraphs of a page section. They are in fact reusable React elements.

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
