# Setup

This part will get you up and running. Setup the Contentful models using
Migrations and get the demo server listening on http://localhost:8080.

## Contentful account

Sign up for a free account at Contentful:

https://www.contentful.com/

Once you've completed free registration, add a new space. (At the time of
writing you do this by clicking top left on the logo).

Choose for a free space and set it up being empty.


## API Keys

The demo code needs an API key to access Contentful. You can find this
information at Settings -> API Keys on the Contentful website.

No keys will be present if you just signed up. Adding a new API key is as simple
as pressing a button. Doing so will present you with the required details for
this demo:

- Space ID
- Content Delivery API - access token
- Environment id

Copy the template [secrets-template.js](/src/contentful/secrets-template.js) and
name the new file [secrets.js](/src/contentful/secrets.js)

Fill in the details and save the file.


## Contentful cli

To be able to create our Contentful models from Javascript (called Migrations),
we need to install the Contentful cli:

```
sudo npm install -g contentful-cli
```

This is well documented here: https://github.com/contentful/contentful-cli


## Contentful access

The next steps tell the Contentful cli which credentials to use and which space
to connect to.

Note that the secrets here are different from the ones we put in
[secrets.js](/src/contentful/secrets.js). The ones in
[secrets.js](/src/contentful/secrets.js) are for reading, while the tokens we
add here are for writing.

The next command creates a local `~/.contentfulrc.json` with the API token
needed to write to your space:
```
contentful login
```

Select a space to use:
```
contentful space use
```

Select the environment to use:
```
contentful space environment use
```

## Migrations

Now that we have the Contentful CLI in place we can run the migrations that will
create our contentful models:
```
npm install
npm run run-migrations
```

Unfortunately there's a manual step involved here because of a bug we haven't
been able to track yet. Bear with us and go to the Content Model menu within
Contentful. Then click on each individual model and click the green `Save`
button on the right. Thank you.


## Load demo content

Within a terminal make sure you are in the root of the repository. Then run this
to import the demo content:

```
contentful space import --content-file ./contentful-content-file.json
```

Check the Contentful web UI to see if some data is there.

A side note: This contentful import tool will import the required models as
well as the data. So even without running the migrations first, the demo will work. However,
importing models from json is not what we are aiming for here.


## Run demo server

To run the server, us the commands:

```
npm install
npm run next-express
```

Your site is now running at: http://localhost:8080/


## Optionally export data

If you later want to export the content you have created into a json file to be
re-used, use:

```
contentful space export
```

## Summary of npm scripts

Run production server:
```
npm start
```

Start live reloading development environment:
```
npm run next
```

Start live reloading dev environment with express server so that routes and
reloading a page will work:
```
npm run next-express
```

## Next Steps:

- Read the [docs](./architecture/architecture.md) for further set up and
  information

