// WIP--not currently used.
// Cloud function to transcode images to thumbnail.
// See https://www.techotopia.com/index.php/A_Cloud_Functions_and_Firebase_Cloud_Storage_Example.

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const gcs = require('@google-cloud/storage')();
const spawn = require('child-process-promise').spawn;

admin.initializeApp(functions.config().firebase);

exports.imageConverter = functions.storage.object().onChange(event => {

  const object = event.data;
  const fileBucket = object.bucket;
  const filePath = object.name;
  const bucket = gcs.bucket(fileBucket);
  const contentType = object.contentType;
  const resourceState = object.resourceState;
  const tempFilePath = `/tmp/mountain.jpg`;

  const fileName = filePath.split('/').pop();

  if (fileName.startsWith('mono_')) {
    return;
  }

  if (!contentType.startsWith('image/')) {
    console.log('Not an image file.');
    return;
  }

  if (resourceState === 'not_exists') {
    console.log('File is being deleted.');
    return;
  }

  return bucket.file(filePath).download({
    destination: tempFilePath
  }).then(() => {
    console.log('Image downloaded locally to', tempFilePath);
    return spawn('convert', [tempFilePath, '-monochrome',
		             tempFilePath]).then(() => {
                               console.log('Thumbnail created at', tempFilePath);
                               const monoFilePath =
		                     filePath.replace(/(\/)?([^\/]*)$/, '$1mono_$2');
                               console.log('Uploading file ' + monoFilePath);
                               return bucket.upload(tempFilePath, {
                                 destination: monoFilePath
                               });
                             });
  });
});
