const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const auth = async (req, res, next) => {
    const token = await req.cookies.jwt
    if(token){
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err){
                res.status(500).json({"message" : "Not authorized"})
            } else {
                if (decodedToken.role === 'admin') {
                    req.role = 1
                    req.id = decodedToken.id
                    next()
                } else if (decodedToken.role === 'user') {
                    req.role = 2
                    req.id = decodedToken.id
                    next()
                } else {
                    return res
                    .status(401)
                    .json({error : "Not authorized, role error"})
                }
            }
        })
    } else {
        res
        .status(401)
        .json({error : "Not authorized, no active session" })
    }
}

/*const auth = async (req, res, next) => {
    const bearerHeader = await req.headers['authorization']
    
    if(bearerHeader){
        const bearer = bearerHeader.split(' ')
        const token = bearer[1]
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err){
                res.status(500).json({"message" : "Not authorized"})
            } else {
                if (decodedToken.role === 'admin') {
                    req.role = 1
                    req.id = decodedToken.id
                    next()
                } else if (decodedToken.role === 'user') {
                    req.role = 2
                    req.id = decodedToken.id
                    next()
                } else {
                    return res
                    .status(401)
                    .json({error : "Not authorized, role error"})
                }
            }
        })
    } else {
        res
        .status(401)
        .json({error : "Not authorized, no active session" })
    }
}*/

module.exports = auth