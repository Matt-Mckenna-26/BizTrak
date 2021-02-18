const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

//non authenicated controller

module.exports.register = (req, res) => {
  const user = new User(req.body);
  user
  .save()
  .then(()=> {
    res.json({msg: "success" , user: user});
  })
  .catch(err => res.status(400).send(err));
}

//Controller to log in user

module.exports.login = (req, res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (user === null) {
        res.status(400).json({msg : "Invalid login attempt"})
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then(passwordIsValid => {
            if (passwordIsValid) {
              res. 
              cookie(
                'usertoken',
                jwt.sign({_id: user._id}, process.env.JWT_SECRET),
                {
                  httpOnly: true
                }
              )
              .json({msg: "success!"});
            } else {
              res.status(400).json({msg: "Invalid login attempt"})
            }
          })
          .catch( err => 
            res.status(400).json({msg : "Invalid login attempt"})
          );
      }
    })
    .catch(err => res.json(err));
}

//controller to get the currently logged in user

module.exports.getLoggedInUser = (req, res) => {
  const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true });
  User.findById(decodedJWT.payload._id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
}
//Controllers to add to the nested schemas (ie. tasks, meeting etc)
module.exports.addContact= (req, res) => {
  let userId =  req.params.userId
  User.findOneAndUpdate({_id: userId}, {$addToSet: {contacts: req.body}}, {new: true, useFindAndModify:false, runValidators:true})
    .then(newContact => {
      res.send(newContact.contacts)
      }
    )
    .catch( err => {
      console.log(err)
      res.status(401).json(err)
    })
};

module.exports.addTask= (req, res) => {
  let userId =  req.params.userId
  User.findOneAndUpdate({_id: userId}, {$addToSet: {tasks: req.body}}, {new: true, useFindAndModify:false, runValidators:true})
    .then(newTasks => {
      res.send(newTasks.tasks)
      }
    )
    .catch( err => {
      console.log(err)
      res.status(401).json(err)
    })
};

module.exports.addMeeting= (req, res) => {
  let userId =  req.params.userId
  User.findOneAndUpdate({_id: userId}, {$addToSet: {meetings: req.body}}, {new: true, useFindAndModify:false, runValidators:true})
    .then(newMeetings => {
      res.send(newMeetings.meetings)
      }
    )
    .catch( err => {
      console.log(err)
      res.status(401).json(err)
    })
};

module.exports.addOrganization= (req, res) => {
  let userId =  req.params.userId
  User.findOneAndUpdate({_id: userId}, {$addToSet: {organizations: req.body}}, {new: true, useFindAndModify:false, runValidators:true})
    .then(newOrganizations => {
      res.send(newOrganizations.organizations)
      }
    )
    .catch( err => {
      console.log(err)
      res.status(401).json(err)
    })
};










//Controller to remove from the nested schemas( i.e. tasks meetings etc)
module.exports.removeTickerFromWatchList = (req, res) => {
  let userId = req.params.userId
  User.findOneAndUpdate({_id: userId},{$pull: {tickersTracked: req.body}}, {new:true, useFindAndModify:false})
  .then(newWatchList => {
    res.send({newWatchList})
    }
  )
  .catch( err => {
    console.log(err)
    res.status(401).json(err)
  })
};

module.exports.LogOut = (req, res) => {
  res
  .cookie("usertoken", jwt.sign({_id:""}, process.env.JWT_SECRET), {
    httpOnly: true,
    maxAge: 0
  })
  .json({msg: "ok"});
}

module.exports.LogOut2 = (req, res) => {
  res.clearCookie("usertoken");
  res.json({ msg: "ok"})
}




module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ user: oneSingleUser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
