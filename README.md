# Corresponding Models

This repository proofs that working with Contentful and React can be done in a
very modular way. At Edenspiekermann we activly use the techniques demonstrated
here to develop designs. Either fully enabled React application as well as
statically generated sites.

## Introduction

This repository enables you to easily create models in Javascript and migrate
them to your space on [Contentful](https://www.contentful.com/).

This allows you to seamlessly move models and content between envrionments and
projects, and create elegant, well-structured websites with minimal effort.

## Content

- [Initial Contentful Setup](./docs/setup.md)
- [Project Architecture](./docs/architecture.md)
- [Project Design](./docs/design.md)
- [Tech Stack](./docs/tech-stack.md)
- [Configuring the HTML Head](./docs/configure-html-head.md)
- [Fetching Data](./docs/fetching-data.md)

## Benefits of using migrations

What is the benefit of using migrations instead of manually creating the models
on the contentful website?

Currently the way to create the same model in multiple environments on
Contenftul is manually through the website. By using migrations in Javascript,
we avoid having to manually create the models on the Contentful website every
time we change environments or start a new project. This allows us to easily use
a 'development' environment, or to use our models and content in a new project
seamlessly.

## Major benefit of this framework
The major benefits of the framework is that it allows us to move our models
between environments and projects.

We're only a small step from using layout sections as npm-modules.

This means that you can put a section into npm. Adding a new section to the
project would be then as simple as running

```
npm --save install my-section`
```

It would then add a new folder to your project with the proper boilerplate for
your section and run the migration so that the Model gets created in your space.

## Requirements

- Node ^8

## Roadmap

### Use npm modules

- Move framework code into separate modules
- Move sections, parts and content model definitions into separate modules

### Less manual steps

- Make layout sections load data automatically
- Generate routes list from Contentful layouts

### Features

- Make content models work with queries based on slug
- Add model cache property
- Define a model dependencies (eg in a tree) so that models can be loaded in
  parallel

### General

- Better error handling
- Remove .response key

## Continue reading

[Initial Contentful Setup](./docs/setup.md)
