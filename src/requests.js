import axios from 'axios';
export default class {

    constructor(params) {
        this.params = params;
    }

    makeRequest(method, params) {
        return axios({
            method: 'POST',
            url: this.params.protocol+'://'+this.params.ip+':'+this.params.port+'/json_rpc',
            headers: { 'Content-Type': 'application/json' },
            data: {
                id: this.params.id,
                jsonrpc: this.params.jsonrpc,
                params,
                method
            }
        });
    }
}