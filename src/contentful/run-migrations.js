// Runs all the migrations like this

'use strict'

const runMigration = require('contentful-migration/built/bin/cli').runMigration
const glob = require('glob')
const os = require('os')
const fs = require('fs')

// This needs a warning if the rc-file cannot be found
let rawConfig = fs.readFileSync(os.homedir() + '/.contentfulrc.json')
let contentfulConfig = JSON.parse(rawConfig)

const options = {
  spaceId: contentfulConfig.activeSpaceId,
  accessToken: contentfulConfig.cmaToken,
  environmentId: contentfulConfig.activeEnvironmentId,
  yes: true,
}

const migrations = async files => {
  for (var i = 0; i < files.length; i++) {
    await runMigration({
      ...options,
      ...{ filePath: process.cwd() + '/' + files[i] },
    })
  }
}

const globOptions = { cwd: 'src/contentful' }
glob('src/**/*-contentful.js', function(er, files) {
  files.push('src/layouts/layout-contentful.js')
  migrations(files)
})
