var express = require('express');
var app     = express();

app.get('/', function(req,res){
   console.log(':)), HI THIS IS JOSH WEISBERGs WEBSITE Server New Hit: ' + timeStamp())
   res.send(':)), HI THIS IS JOSH WEISBERGs WEBSITE Server New Hit: ' + timeStamp());
});

function timeStamp(){
   var currentdate = new Date();
   var prettyTime = currentdate.getHours() + ":" +
               currentdate.getMinutes() + ":" +
               currentdate.getSeconds();
   return prettyTime;               
}

var port = 3001;
app.listen(port,function(){
   console.log('Listening on port:' + port);
});
