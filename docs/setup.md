# Setting up your Content Model on Contentful using Migrations

1. Create an empty space at https://www.contentful.com/

2. Install the Contentful command line https://github.com/contentful/contentful-cli

3. Setup your local machine to allow write access to your new Contentful space with these commands:
    - `contentful login`  - this will create a file on your local machine with the API token needed to write to your space
    - `contentful space use`  - this allows you to select your new space to use
    - `contentful space environment use`  - this allows you to select the environment eg. master or development

4. Make sure that your [secrets.js](/src/contentful/secrets.js) file contains the correct contentful space tokens, ID and envrionment - this file contains information for reading from the contentful space.
  - You can find this information at Settings -> API Keys on the Contentful website

5. Run migrations using the command: `npm run run-migrations` - this sets up your contentful models

6. Go to the Content Model menu within Contentful, click on each individual model and click the green `Save` button on the right.

7. Insert content into the contentful models using command: `contentful space import --content-file <your-content-file.json>`

8. Install npm modules, build and run
```
npm install
npm run next-express
```
  - This will install all the necessary npm modules,

9. (Optional) If you later want to export the content you have created into a json file to be re-used, use command: `contentful space export`

### Next Steps:

- Read through the other [contents](/README.md) for further set up and information
