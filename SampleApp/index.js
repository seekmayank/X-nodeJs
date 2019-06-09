let express = require('express');

let app = express();

app.get('/',function(req,res) {
    res.send('Hello World');
});

app.listen(8080, function() {
    console.log('App Started');
});
