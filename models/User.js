const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  cityOrigin: String,
  role: {type:String, enum:['admin', 'user'], default: 'user'},
  imgName: {type: String, default: 'imagename'},
  imgPath: {type: String, default: 'https://res.cloudinary.com/yelpcampagb/image/upload/v1582053793/nalwlnutebmewn76refa.png'},
  googleID: String,
  favs: [{
    type: Schema.Types.ObjectId,
    ref: 'Travel'
  }]
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
