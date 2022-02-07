const jwt = require('jsonwebtoken')


const verify = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json(err.message)

        req.user = user
        next()
    })
}




module.exports = { verify}
