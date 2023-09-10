const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const auth = async (req, res, next) => {
    const token = await req.cookies.jwt
    if(token){
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err){
                res.status(500).json({error : "Not authorized"})
            } else {
                if (decodedToken.role === 'user') {
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
        .json({error : "Not authorized, no active session"})
    }
}

module.exports = auth