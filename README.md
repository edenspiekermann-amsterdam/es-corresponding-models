# Corresponding Models Site

Corresponding Models enables you to easily create models in Javascript and migrate them to your space on [Contentful](https://www.contentful.com/).

This allows you to seamlessly move models and content between envrionments and projects, and create elegant, well-structured websites with minimal effort.

## Content

- [Initial Contentful Setup](./docs/setup.md)
- [Deploying on Kubernetes](./docs/kubernetes.md)
- [Project Architecture](./docs/architecture.md)
- [Project Design](./docs/design.md)
- [Tech Stack](./docs/tech-stack.md)
- [Configuring the HTML Head](./docs/configure-html-head.md)
- [Fetching Data](./docs/fetching-data.md)

## What is the benefit of using migrations instead of manually creating the models on the contentful website?
Currently the way to create the same model in multiple environments on Contenftul is manually through the website. By using migrations in Javascript, we avoid having to manually create the models on the Contentful website every time we change environments or start a new project. This allows us to easily use a 'development' environment, or to use our models and content in a new project seamlessly.

## What is the major benefit of this framework?
The major benefits of the framework is that it allows us to move our models and content between environments and projects, and that we can use layout sections as npm-modules.
This means that you can put a section into npm. Adding a new section to the project would be then as simple as running `npm --save install my-section`
It would then add a new folder to your project with the proper boilerplate for your section and run the migration so that the Model gets created in your space.

### Requirements

- Node ^8
