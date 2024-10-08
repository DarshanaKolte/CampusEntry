const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
          },
          email: {
            type: String,
            required: true,
            unique: true
          },
          password: {
            type: String,
            required: true
          }
    } ,{ collection : 'students' }
);
const Student = mongoose.model('Student',schema);
module.exports = Student;
