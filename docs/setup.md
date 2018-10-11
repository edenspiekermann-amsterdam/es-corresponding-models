# Setup

This part will get you up and running. Setup the Content Model on Contentful
using Migrations and get the demo server listening on http://localhost:8080.

## Contentful account

Sign up for a free account at Contentful:

https://www.contentful.com/

Once you've completed free registration, click top left to add a new space.

Choose for a free space and set it up being empty.


## API Keys

The demo code needs an API key to access Contentful. You can find this
information at Settings -> API Keys on the Contentful website.

No keys will be present if you just signed up. Adding a new API key is
as simple as pressing the buttun. Doing so will present you with some
details we need for this demo:

- Space ID
- Content Delivery API - access token
- Environment id

For this demo secrets are stored in a file in the repository. In a production
environment you should move these keys to a safer place.

Have a look at [secrets-template.js](/src/contentful/secrets-template.js). , put
in the details here and save the file.

## Contentful cli

Install the Contentful command line:

https://github.com/contentful/contentful-cli


## Contentful access

Setup your local machine to allow write access to your new Contentful space with
these commands:

This will create a file on your local machine with the API token needed to write
to your space:
```
contentful login
```

This allows you to select your new space to use:
```
contentful space use
```

This allows you to select the environment eg. master or development:
```
contentful space environment use
```


5. Run migrations using the command: `npm run run-migrations` - this sets up your contentful models.

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
