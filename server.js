'use strict';

//xpress is a 3rd party dependency that we use  
const express = require('express');

const app = express();

app.use(express.static('./public'));

//GET Route
app.get('/test',(request, response)=>{
    response.send('hello');
});

app.get('/',(request, response)=>{
    response.sendFile('./public/index.html');

});

app.listen(3000, () => {
    console.log('server up on port 3000');
});
