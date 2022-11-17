require("express-async-errors");

const database = require("./database/SQLite");

const AppError = require("./utils/AppError");

const express = require("express");   

const routes = require("./routes")

const app = express();                                       //Dizer pra aplicação que o padrão e o json
app.use(express.json());                                                

app.use(routes); // As rotas estão aqui

database();

app.use((error, request , response, next) =>{
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

    console.error(error);

  return response.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

  
const PORT = 3333;                                                    
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));   
