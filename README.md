# Corresponding Models

This framework provides a simple and modular workflow for developing with Contentful and React. At Edenspiekermann we actively use this framework to develop both fully enabled React applications and statically generated sites.


## Introduction

Within this repository we will refer to the code here as 'the framework'. While
this is by far not a framework yet, we consider it the start of one.

The framework will enable you to easily create models in Javascript and migrate
them to your space on [Contentful](https://www.contentful.com/).

This allows for seamlessly moving models and content between environments and
projects, and create elegant, well-structured websites with minimal effort.


## Content

- [Tech stack and requirements](./docs/tech-stack.md)
- [Get the demo running](./docs/setup.md)
- [Roadmap](./docs/roadmap.md)

## Architecture

- [Project Architecture](./docs/architecture/architecture.md)
- [Fetching Data](./docs/architecture/fetching-data.md)
- [Configuring the HTML Head](./docs/architecture/configure-html-head.md)

## Other

- [Kubernetes](./docs/kubernetes.md)


## Benefits

### Migrations

What is the benefit of using migrations instead of manually creating the models
on the Contentful website?

Currently the way to create the same model in multiple environments on
Contentful is manually through the website. By using migrations in Javascript,
we avoid having to manually create the models on the Contentful website every
time we change environments or start a new project.

This allows us to easily use a 'development' environment, or to use our models
in a new project seamlessly.


### NPM modules

This is a future improvement that can be realized with a minimal amount of work.

With the current setup it is easy to move models between environments and
projects. Using NPM modules would make this even easier and also adds dependency
and version control. 

This would mean that you can put sections into npm. Adding a new section to the
project would be then as simple as running

```
npm --save install my-section
```

It would then add a new folder to your project with the proper boilerplate for
your section and run the migration so that the Model gets created in your space.


## Next Steps

[Get it up and running](./docs/setup.md)

