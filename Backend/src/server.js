import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRouter from "./routes/web"
import initApiRouter from "./routes/api"
import connection from "./config/ConnectDB"
require("dotenv").config();
import bodyParser from "body-parser";

const app = express();

//config view engine
configViewEngine(app);

app.listen(process.env.PORT||3000, ()=>{
    console.log(">> running on port 3000")
})

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.FEURL);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


//test connection 
connection.connection();

//init web routes
initWebRouter(app);

//init api routes
initApiRouter(app);

