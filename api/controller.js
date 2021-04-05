'use strict'

const properties = require("../package.json")
// const distance = require("../service/cep")

module.exports = {
    about: (req, res) => {
        const aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo)
    },
    getCepInfo: (req, res) => {
        //
    }
}