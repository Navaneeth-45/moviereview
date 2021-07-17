const exp = require("express")
const adminApi = exp.Router()
const expressErrorHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
adminApi.use(exp.json())

//login
adminApi.post("/login", expressErrorHandler(async (req, res, next) => {

    let credentials = req.body;
    if (req.body.username !== 'admin') {
        res.send({ message: "Invalid username" })
    }
    else if (req.body.password !== 'admin') {
        res.send({ message: "Invalid password" })
    } else {
        //create a token
        let signedToken = jwt.sign({ username: credentials.username }, 'abcdef', { expiresIn: 10 })
        //send token to client
        res.send({ message: "login success", token: signedToken, username: credentials.username })
    }
}))

module.exports = adminApi;