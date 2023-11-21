// Imports Mongoose library
const mongoose = require('mongoose');

//schema for what makes up a user
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, 
    required: true },
  });
// model for userSchema
  const user = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty
user.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      const results = await user.insertMany(
        [
          { username: 'User1', email:  'user1@gmail.com' },
          { username: 'User2', email:  'user2@gmail.com' },
          { username: 'User3', email:  'user3@gmail.com' },
        ]
      );
      return console.log('users inserted', results);
    }
    return console.log('Already populated');
  })
  .catch(err => handleError(err));

  module.exports = user;
