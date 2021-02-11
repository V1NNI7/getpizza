const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');

router.post('/', async (req, res) => {
    const result = await User.findAll({
        where: {
            userName: req.body.userName,
            password: sha256(req.body.password + "@#$ti35-senac123")
        }
    });
    if (!result.length) { //(!result.length) = (result.length == 0)
        res.status(403).json({ auth: false });
    }
    res.status(200).json({ auth: true });
});

module.exports = router;