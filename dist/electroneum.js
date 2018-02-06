'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requests = require('./requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultParams = {
    protocol: 'http',
    ip: '127.0.0.1',
    port: 26968,
    id: '0',
    jsonrpc: '2.0'
};

var _class = function () {
    /**
     * Merges passed one params with the default params
     * @param params
     */
    function _class() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class);

        this.params = _extends({}, defaultParams, params);

        this.request = new _requests2.default(this.params);
    }

    _createClass(_class, [{
        key: 'getBlockCount',
        value: function getBlockCount() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('getblockcount', data);
        }
    }, {
        key: 'getBlockHash',
        value: function getBlockHash() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('on_getblockhash', data);
        }
    }, {
        key: 'getBlockTemplate',
        value: function getBlockTemplate() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('getblocktemplate', data);
        }
    }, {
        key: 'submitBlock',
        value: function submitBlock() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('submitblock', data);
        }
    }, {
        key: 'getLastBlockHeader',
        value: function getLastBlockHeader() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('getlastblockheader', data);
        }
    }, {
        key: 'getBlockHeaderByHash',
        value: function getBlockHeaderByHash() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('getblockheaderbyhash', data);
        }
    }, {
        key: 'getBlockHeaderByHeight',
        value: function getBlockHeaderByHeight() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('getblockheaderbyheight', data);
        }
    }, {
        key: 'getBlockHeadersRange',
        value: function getBlockHeadersRange() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('getblockheadersrange', data);
        }
    }, {
        key: 'getBlock',
        value: function getBlock() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('getblock', data);
        }
    }, {
        key: 'getConnections',
        value: function getConnections() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('get_connections', data);
        }
    }, {
        key: 'getInfo',
        value: function getInfo() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('get_info', data);
        }
    }, {
        key: 'hardForkInfo',
        value: function hardForkInfo() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('hard_fork_info', data);
        }
    }, {
        key: 'setBans',
        value: function setBans() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('set_bans', data);
        }
    }, {
        key: 'getBans',
        value: function getBans() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('get_bans', data);
        }
    }, {
        key: 'flushTxPool',
        value: function flushTxPool() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('flush_txpool', data);
        }
    }, {
        key: 'getOutputHistogram',
        value: function getOutputHistogram() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('get_output_histogram', data);
        }
    }, {
        key: 'getVersion',
        value: function getVersion() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('get_version', data);
        }
    }, {
        key: 'getCoinbaseTxSum',
        value: function getCoinbaseTxSum() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('get_coinbase_tx_sum', data);
        }
    }, {
        key: 'getFeeEstimate',
        value: function getFeeEstimate() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('get_fee_estimate', data);
        }
    }, {
        key: 'getAlternateChains',
        value: function getAlternateChains() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('get_alternate_chains', data);
        }
    }, {
        key: 'relayTx',
        value: function relayTx() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('relay_tx', data);
        }
    }, {
        key: 'syncInfo',
        value: function syncInfo() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('sync_info', data);
        }
    }, {
        key: 'getTxPoolBacklog',
        value: function getTxPoolBacklog() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.request.makeRequest('get_txpool_backlog', data);
        }
    }]);

    return _class;
}();

exports.default = _class;