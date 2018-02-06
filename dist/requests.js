'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(params) {
        _classCallCheck(this, _class);

        this.params = params;
    }

    _createClass(_class, [{
        key: 'makeRequest',
        value: function makeRequest(method, params) {
            return (0, _axios2.default)({
                method: 'POST',
                url: this.params.protocol + '://' + this.params.ip + ':' + this.params.port + '/json_rpc',
                headers: { 'Content-Type': 'application/json' },
                data: {
                    id: this.params.id,
                    jsonrpc: this.params.jsonrpc,
                    params: params,
                    method: method
                }
            });
        }
    }]);

    return _class;
}();

exports.default = _class;