const { default: axios } = require("axios");
const validator = require("../helpers/cepValidator")

module.exports = {
    find: async (req, _, next) => {
        try {
            const cep = await validator.validate(req.params.cep)
            const request = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            next(request.data)

        } catch (err) {
            next(err)
        }
    }
}