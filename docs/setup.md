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

To be able to create our Contentful models from javascript (called migrations),
we need to install the Contentful cli:

```
npm install -g contentful-cli
```

This is well documented here: https://github.com/contentful/contentful-cli


## Contentful access

The next steps tell the Contentful cli which credentials to use and which
space to connect to.

Note that the secrets here are different from the ones we put in
[secrets.js](/src/contentful/secrets.js). The ones in
[secrets.js](/src/contentful/secrets.js) are for reading, while the tokes we add
here are for writing.

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

Run the migrations that setup our contentful models:
```
npm run run-migrations
```

6. Go to the Content Model menu within Contentful, click on each individual model and click the green `Save` button on the right.

7. Insert content into the contentful models using command: `contentful space import --content-file <your-content-file.json>`

8. Install npm modules, build and run with these commands:
```
npm install
npm run next-express
```
  - This will install all the necessary npm modules, and get your site running live at http://0.0.0.0:8080/

9. (Optional) If you later want to export the content you have created into a json file to be re-used, use command: `contentful space export`

Summary of npm commands:

`npm start` - run production server
`npm run next` - start dev env
`npm run next-express` - start dev env with express so that routes work

### Next Steps:

- Read through the other [contents](/README.md) for further set up and information

- Interested in setting up Kubernetes? Here are the commands we at Edenspiekermann use. You probably need to adapt them to your config:

```
kubectl apply -f kubernetes/namespace.yml
kubectl apply -f kubernetes/webserver-service.yml
kubectl apply -f kubernetes/production-webserver-deployment.yml
kubectl apply -f kubernetes/staging-ingress.yml
```
