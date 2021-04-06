module.exports = {
    validate: (cep) => {
        const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
        if(regexCEP.test(cep)) {
            return cep.replace(/[^\d]+/g, "")
        }
        throw new Error("Invalid cep");
    }
}