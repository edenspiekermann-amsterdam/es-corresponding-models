# Corresponding Contentful and React models (es-corresponding-models)

#TBW

```
1. Set up for migrations
2. Run migrations
3. Add content to sections
4. Modify sections / create new sections

#TBW - What is the benefit of using migrations instead of manually creating the models in contentful?
To answer your question on the benefits of using migration scripts. We need to create the models in Javascript because there is no other way to create the models in multiple environments. We use the ‘development’ environment to develop the models. Once the models are done these models must be created in the ‘master’ environment as well. Unfortunately there is no other way of doing this than using migrations. For example, you cannot promote the dev environment to master within contentful

#TBW - What is the major benefit of this framework?

The major benefits of the framework is that we can use layout sections as npm-modules.
This means that in theory you can put a section into npm. Adding a new section to the project would be then as simple as running `npm --save install my-section`
It would then add a new folder to your project with the proper boilerplate for your section and run the migration so that the Model gets created in your space.

contentful login
contentful space use
contentful space environment use

.contentfulrc.json is a file on your own pc, that defines the tokens for writing to the contentful space. This is needed to run the migration scripts and set the models in contentful.

secrets.js is a file that contains tokens for reading from the contentful space

Running Migrations
---------------------
When we run migrations, all files ending in '-contentful.js' will be run. This then sets up the models defined in these files in contentful. This is an alternative to creating the models manually in contentful. *Benefit (?)

To run a migration from the command line, create a ~/.contentfulrc.json for the
development environment and use:
contentful space migration --environment-id=development point-to-this-file.js
```
