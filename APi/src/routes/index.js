const { Router } = require("express"); // reunir todas as rotas da aplicação

const usersRoutes = require("./users.routes");

const routes = Router();  // contém todos os grupos de rotas do meu usuário
routes.use("/users", usersRoutes); //aqui está o / users então me leve para esse arquivo

module.exports = routes;