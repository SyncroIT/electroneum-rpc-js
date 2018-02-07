## Electroneum RPC 

Electroneum RPC is a JavaScript library that adapts the Electroneum JSON RPC methods to JS.

#### Installation

```
npm install electroneumjs 
```

#### Usage
```javascript
const EtnRpc = require('electroneumjs');
var rpc = new EtnRpc();
rpc.getBlockCount().then(function(response) {
    console.log(response.data);
}); 
```

#### Options
```javascript
new EtnRpc({
    protocol: 'http',
    ip: '127.0.0.1',
    port: 26968,
    id: '0',
    jsonrpc: '2.0'
});
```


#### Method parameters
```javascript
const rpc = new EtnRpc();

// on_getblockhash method
rpc.getBlockHash([50]);

// submitblock method
rpc.submitBlock('blob_of_mined_block');
```

#### Methods 
| JavaScript Method      | RPC Method                 | 
| :--------------------: | :------------------------: |
| getBlockCount          | getblockcount              |
| getBlockHash           | on_get_block_hash          |
| getBlockTemplate       | get_block_template         |
| submitBlock            | submit_block               |
| getLastBlockHeader     | get_last_block_header      |
| getBlockHeaderByHash   | get_block_header_by_hash   |
| getBlockHeaderByHeight | get_block_header_by_height |
| getBlockHeadersRange   | get_block_headers_range    |
| getBlock               | get_block                  |
| getConnections         | get_connections            |
| getInfo                | get_info                   |
| hardForkInfo           | hard_fork_info             |
| setBans                | set_bans                   |
| getBans                | get_bans                   |
| flushTxPool            | flush_txpool               |
| getOutputHistogram     | get_output_histogram       |
| getVersion             | get_version                |
| getCoinbaseTxSum       | get_coinbase_tx_sum        |
| getFeeEstimate         | get_fee_estimate           |
| getAlternateChains     | get_alternate_chains       |
| relayTx                | relay_tx                   |
| syncInfo               | sync_info                  |
| getTxpoolBacklog       | get_txpool_backlog         |


#### How to run Electroneumd?

- Download the Electroneum project from their repository from here: https://github.com/electroneum/electroneum
- Install *CMake* if you have not did it.
- Inside the Electroneum project folder run `make` from command line
- Run `cd build/release/bin` and then open `electroneumd` by typing `./electroneumd`

**It will take some time to synchronize the blockchain with the network**


#### TODO
- Integrate **electroneum-wallet-rpc** methods