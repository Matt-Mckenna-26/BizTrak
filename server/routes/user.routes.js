const UserController = require("../controllers/user.controller");

// authenticate method must be imported from jwt config to authenticate at the correspinding routes.
const {authenticate} = require("../config/jwt.config")

module.exports = app => {
  //Routes that do not require the authenication method found in jwt.config 
  app.post("/api/register" , UserController.register);
  app.post("/api/login" , UserController.login);
  app.post("/api/logout" , UserController.LogOut);


  //authenticate method is ran prior to hitting api
  app.get("/api/users/",authenticate, UserController.findAllUsers);
  app.get("/api/users/loggedin", authenticate, UserController.getLoggedInUser);

//left here for dev purposes when using postman
  app.get("/api/users/", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUser);
  app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.post("/api/users/new", UserController.createNewUser);
  app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
};