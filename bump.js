const fs = require('fs');
const packagejson = require('./package.json');

if (!packagejson['docker-repo']) abort('package.json: required key "docker-repo" not found');
if (!packagejson['name']) abort('package.json: required key "name" not found');
if (!packagejson['version']) abort('package.json: required key "version" not found');
if (!packagejson['kube-webserver-manifest']) abort('package.json: required key "kube-webserver-manifest" not found');

const version = packagejson['version'];
console.log('Updating provision image');
console.log('Manifest: ' + packagejson['kube-webserver-manifest']);
console.log('New image: ' + packagejson['docker-repo'] + '/' + packagejson['name'] + ':v' + version);

var regExp = new RegExp(
  '(' +
  packagejson['docker-repo'] +
  '\/' +
  packagejson['name'] +
  ':)([0-9\.v-]+[0-9]+|latest)'
);

try {
  fs.readFile(packagejson['kube-webserver-manifest'], 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(regExp, '$1v' + version);

    fs.writeFile(packagejson['kube-webserver-manifest'], result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
} catch (error) {
  abort(error);
}

function abort(message) {
  console.log(message);
  console.log('Aborting gracefully');
  process.exit(0);
}
