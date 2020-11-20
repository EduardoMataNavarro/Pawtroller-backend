const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

AWS.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_DEFAULT_REGION
});

const s3 = new AWS.S3();

module.exports = function (bucketname) {

    const upload = multer({
        storage: multerS3({
            storage: s3,
            bucket: bucketname,
            metadata: function (req, file, cb) {
                cb(null, { fieldname: file.fieldname });
            },
            key: function (req, file, cb) {
                cb(null, Date.now().toString());
            }
        })
    });

    return upload;
};
