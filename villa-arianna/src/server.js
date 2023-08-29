const express = require('express');
const app = express();

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// route for handling requests from the Angular client
app.get('/api/message', (req, res) => {
    res.json({
        message:
            'Hello GEEKS FOR GEEKS Folks from the Express server!'
    });
});

// SEARCH
// route for handling requests from the Angular client
app.get('/api/search', (req, res) => {
    console.log('search term', JSON.stringify(req.query));
    var BoxSDK = require('box-node-sdk');

    // Initialize the SDK with your app credentials
    var sdk = new BoxSDK({
        clientID: '1rcqsqivxd3hd6tr7f7mhnd04jpq872z',
        clientSecret: 'bhCUuokWcnMFDdZIx6D21gsDFDdR467o'
    });

    // Create a basic API client, which does not automatically refresh the access token
    var client = sdk.getBasicClient('3W9T2XqThVeTEEJfTvFEoYygVR7rL6Ub');

    // Search for PDF or Word documents matching "Mobile"
    client.search.query(
        req.query.searchTerm,
        {
            fields: 'name,id',
            // file_extensions: 'pdf,doc',
            limit: 200,
            offset: 0,
            ancestor_folder_ids: "165682361236,165679997956,165680323304,165681470106,173746409655,165681353082,165681298231"
            // content_types: ["tags"]
        })
        .then(results => {
            console.log('Data received!');
            res.json({
                data: results
            });

        });
});



app.get('/api/filesByFolder', (req, res) => {

    var BoxSDK = require('box-node-sdk');

    // Initialize the SDK with your app credentials
    var sdk = new BoxSDK({
        clientID: '1rcqsqivxd3hd6tr7f7mhnd04jpq872z',
        clientSecret: 'bhCUuokWcnMFDdZIx6D21gsDFDdR467o'
    });

    // Create a basic API client, which does not automatically refresh the access token
    var client = sdk.getBasicClient('Cdm14KoIRAIzXga587BfcDvrXXfs0w61');

    client.folders.getItems(
        '114825448225',
        {
            usemarker: 'false',
            fields: 'name',
            offset: 0,
            limit: 25
        })
        .then(data => {
            console.log('Data received!');
            res.json({
                data: data.entries
            });


        })
        .catch(err => console.log('Got an error!', err));

});

app.get('/api/auth', (req, res) => {

    console.log('here!');

    var BoxSDK = require('box-node-sdk');

    // Initialize the SDK with your app credentials
    var sdk = new BoxSDK({
        clientID: '1rcqsqivxd3hd6tr7f7mhnd04jpq872z',
        clientSecret: 'bhCUuokWcnMFDdZIx6D21gsDFDdR467o'
    });

    // Create a basic API client, which does not automatically refresh the access token
    var client = sdk.getBasicClient('sLhEy6xN6c6ZEjN6zvs3QDOi1sEDbwS7');
    res.json({
        client:
            client
    });
    // Get your own user object from the Box API
    // All client methods return a promise that resolves to the results of the API call,
    // or rejects when an error occurs
    // client.users.get(client.CURRENT_USER_ID)
    //     .then(user => {
    //         console.log('Hello', user.name, '!');
    //         res.json({
    //             message:
    //                 'Hola ' + user.name + '!'
    //         });
    //     })
    //     .catch(err => console.log('Got an error!', err));
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});