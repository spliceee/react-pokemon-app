const User = require('../models/User.model');

module.exports = {
  // GET /users
  fetchUsers: function(req, res){
    User.find({}, function(err, result){
      if (err) return res.send(err);
      res.send(result);
    })
  },
  // POST /users
  createUser: function(req, res){
    let user = new User({
      name: req.body.name
    });
    user.save(function(err, result){
      if (err) return res.send(err);
      res.send(result);
    });
  }
}
