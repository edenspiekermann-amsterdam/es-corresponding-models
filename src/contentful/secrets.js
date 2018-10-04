// These secrets are not kept separate from the repo because these secrets
// are bundled in the client js. This cannot be changed without changing the
// current architecture.
// These tokens are used to read content from the contentful space

module.exports = {
  CONTENTFUL_SPACE_ID: '<space_id>',
  CONTENTFUL_DELIVERY_TOKEN: '<delivery_token>',
  ENVIRONMENT: '<environment>',
}
