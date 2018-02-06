'use strict';

var _electroneum = require('./electroneum');

var _electroneum2 = _interopRequireDefault(_electroneum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create your ETN instance
var etn_instance = new _electroneum2.default({ port: 36968 });

// Get the block count
etn_instance.getBlockCount().then(function (r) {
    // Log the data
    console.log(r.data);
});