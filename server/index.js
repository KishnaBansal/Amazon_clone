console.log("Hello,World!!");
//print hello....
const express = require('express'); //Similar to import 'package:express/express.dart'
const PORT = 3000;
const app = express();

// Creating an API
// http://<youripaddress>/hello-world
app.get('/hello-world',(req,res) => {
    // res.send("Hello World!!");
    res.json({hi : "Hello World @@"});
});

app.get('/',(req,res) => {
    res.json({name: "PeaceCool"});
});

//GET,PUT,POST,DELETE,UPDATE -> CRUD (Create,read,update,delete)



app.listen(PORT,"0.0.0.0",() => {
    console.log(`connected at port ${PORT}`);
});  //It binds itself with the host that is specified by us and listens for any other connenction
