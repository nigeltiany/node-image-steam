module.exports = StorageBase;

function StorageBase(options) {
  if (!(this instanceof StorageBase)) {
    return new StorageBase(options);
  }

  this.options = options || {};
}

var p = StorageBase.prototype;

p.fetch = function(options, originalPath, stepsHash, cb) {
  cb(new Error('not implemented'));
};

p.store = function(options, originalPath, stepsHash, image, cb) {
  cb(new Error('not implemented'));
};
