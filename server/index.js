//IMPORT FROM PACKAGES
const express = require('express'); //Similar to import 'package:express/express.dart'
const mongoose = require('mongoose');
//IMORT FROM OTHER FILES
const authRouter = require('./routes/auth');  //Similar to import '.features/auth/screens/screen.dart'

//INIT
const PORT = 3000;
const app = express();
//If password contains special character hide it by using %40 instead of it
const DB = 'mongodb+srv://kishna:kb1981%4005@cluster0.qeauhdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middleware
//CLIENT -> MIDDLEWARE -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);

//Connections
mongoose.connect(DB)
.then(() => {
    console.log("Connection Sccessfull");
}).catch((e) => {
    console.log(e);
});


app.listen(PORT,"0.0.0.0",() => {
    console.log(`connected at port ${PORT}`);
});  //It binds itself with the host that is specified by us and listens for any other connenction
