import etn from './electroneum';


// Create your ETN instance
let etn_instance = new etn({ port: 36968 });

// Get the block count
etn_instance.getBlockCount().then(function(r) {
    // Log the data
    console.log(r.data);
});