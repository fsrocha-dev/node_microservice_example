'use strict'
const { serializeError } = require('serialize-error');

const properties = require("../package.json")
const cep = require("../service/cep")

module.exports = {
    about: (req, res) => {
        const aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.status(200).json(aboutInfo)
    },
    getCepInfo: (req, res) => {
        cep.find(req, res, (err, dist) => {
            if(err) res.status(400).json(serializeError(err))
            res.status(200).json(dist)
        })
    }
}