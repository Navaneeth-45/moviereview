const exp = require("express")
const app = exp();
const path = require("path")


//connect angular app with express server
app.use(exp.static(path.join(__dirname, './dist/frontendproject1/')))

//import APIS
const userApi = require("./APIS/user-api")
const adminApi = require('./APIS/admin-api')
//import MongoCLient
const mc = require("mongodb").MongoClient;



//connection string
const databaseUrl ="mongodb+srv://siddhu:siddhu@backend.tsjcp.mongodb.net/backend?retryWrites=true&w=majority"

//const databaseUrl="mongodb://<username>:<password>@cluster0-shard-00-00.rjvoz.mongodb.net:27017,cluster0-shard-00-01.rjvoz.mongodb.net:27017,cluster0-shard-00-02.rjvoz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"



//connect to DB
mc.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) {
        console.log("err in db connection", err);
    }
    else {
        //get database object
        let databaseObj = client.db("backend")
        //create usercollection object

        let userCollectionObj = databaseObj.collection("usercollection")
        let ratingcollection = databaseObj.collection("ratingcollection")
        let contactscollection= databaseObj.collection("contactscollection")

        app.set("userCollectionObj", userCollectionObj)
        app.set("ratingcollection", ratingcollection)
        app.set("contactscollection", contactscollection)

        console.log("connected to database")

    }
})




//execute specific api based on path
app.use("/user", userApi)
app.use("/admin", adminApi)




//invalid path
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})

//error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})


//assign port
const port = 1000
app.listen(port, () => console.log(`server on ${port}...`))