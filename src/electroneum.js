import Requests from './requests';

const defaultParams = {
    protocol: 'http',
    ip: '127.0.0.1',
    port: 26968,
    id: '0',
    jsonrpc: '2.0'
};

export default class {
    /**
     * Merges passed one params with the default params
     * @param params
     */
    constructor(params = {}) {
        this.params = {
            ...defaultParams,
            ...params
        };

        this.request = new Requests(this.params);
    }

    getBlockCount(data = {}) {
        return this.request.makeRequest('getblockcount', data);
    }

    getBlockHash(data = {}) {
        return this.request.makeRequest('on_getblockhash', data);
    }

    getBlockTemplate(data = {}) {
        return this.request.makeRequest('getblocktemplate', data);
    }

    submitBlock(data = {}) {
        return this.request.makeRequest('submitblock', data);
    }

    getLastBlockHeader(data = {}) {
        return this.request.makeRequest('getlastblockheader', data);
    }

    getBlockHeaderByHash(data = {}) {
        return this.request.makeRequest('getblockheaderbyhash', data);
    }

    getBlockHeaderByHeight(data = {}) {
        return this.request.makeRequest('getblockheaderbyheight', data);
    }

    getBlockHeadersRange(data = {}) {
        return this.request.makeRequest('getblockheadersrange', data);
    }

    getBlock(data = {}) {
        return this.request.makeRequest('getblock', data);
    }

    getConnections(data = {}) {
        return this.request.makeRequest('get_connections', data);
    }

    getInfo(data = {}) {
        return this.request.makeRequest('get_info', data);
    }

    hardForkInfo(data = {}) {
        return this.request.makeRequest('hard_fork_info', data);
    }

    setBans(data = {}) {
        return this.request.makeRequest('set_bans', data);
    }

    getBans(data = {}) {
        return this.request.makeRequest('get_bans', data);
    }

    flushTxPool(data = {}) {
        return this.request.makeRequest('flush_txpool', data);
    }

    getOutputHistogram(data = {}) {
        return this.request.makeRequest('get_output_histogram', data);
    }

    getVersion(data = {}) {
        return this.request.makeRequest('get_version', data);
    }

    getCoinbaseTxSum(data = {}) {
        return this.request.makeRequest('get_coinbase_tx_sum', data);
    }

    getFeeEstimate(data = {}) {
        return this.request.makeRequest('get_fee_estimate', data);
    }

    getAlternateChains(data = {}) {
        return this.request.makeRequest('get_alternate_chains', data);
    }

    relayTx(data = {}) {
        return this.request.makeRequest('relay_tx', data);
    }

    syncInfo(data = {}) {
        return this.request.makeRequest('sync_info', data);
    }

    getTxPoolBacklog(data = {}) {
        return this.request.makeRequest('get_txpool_backlog', data);
    }
}