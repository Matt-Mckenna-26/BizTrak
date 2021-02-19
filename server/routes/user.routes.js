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

  //routes for the user to modify thier user specific data (contacts, tasks, meetings etc)
  app.put("/api/addContact/:userId", authenticate, UserController.addContact);
  app.put("/api/addTask/:userId", authenticate, UserController.addTask);
  app.put("/api/addMeeting/:userId", authenticate, UserController.addMeeting);
  app.put("/api/addOrganization/:userId", authenticate, UserController.addOrganization);

  app.get("/api/viewTask/:id/:taskid", authenticate, UserController.getTask);

//left here for dev purposes when using postman
  app.get("/api/users/", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUser);
  app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.post("/api/users/new", UserController.createNewUser);
  app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
};