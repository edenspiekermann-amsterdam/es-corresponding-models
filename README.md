# Corresponding Contentful and React models (es-corresponding-models)

TBW

```
1. Set up for migrations
2. Run migrations
3. Add content to sections
4. Modify sections / create new sections

Benefits:
- Why is creating the model this way better?
- What does the framework allow us to do more easily/better ?

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
