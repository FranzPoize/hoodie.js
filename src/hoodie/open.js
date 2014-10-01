var hoodieRemoteStore = require('../lib/store/remote');
var extend = require('extend');

module.exports = function (hoodie) {

  /**
   * generic method to open a store.
   *
   * hoodie.open("some_store_name").findAll()
   */
  function open(storeName, options) {
    options = options || {};

    extend(options, {
      name: storeName
    });

    return hoodieRemoteStore(hoodie, options);
  }

  //
  // Public API
  //
  hoodie.open = open;
};
