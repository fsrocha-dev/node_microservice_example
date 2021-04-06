const controller = require("./controller")

module.exports = function(app) {
    app.get('/about', controller.about);
    app.get('/cep/:cep', controller.getCepInfo);
  };
