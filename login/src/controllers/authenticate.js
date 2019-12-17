const tokenRegistry = require('../utils/tokenRegistry');

exports.post = async (req, res) => {
    const {headers: {authorization}} = req;

    if (!authorization || !authorization.startsWith("Bearer"))
        return res.status(401).send('Unauthorized');

    const token = authorization.slice("Bearer ".length);

    if (tokenRegistry.isValid(token))
        return res.status(200).send('Ok');

    return res.status(401).send('Unauthorized');
};
/*
{services : [localhost:8080/base64,192.168.0.101/base64] }
 */
