//***********************************************************************
//**************************** console.log current model name ***********
console.log("model name friend.js")
//***********************************************************************
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FriendSchema = new mongoose.Schema({
  fname: {type: String, required: [true, 'first name required']},
  lname: {type: String, required: [true, 'last name required']},
  birthday: {type: Date, required: [true, 'birthday required']}
}, {timestamps: true});

mongoose.model('Friend', FriendSchema);

// age: {type: Number}
// birthday:{type: Date}
// _user: {type: Schema.Types.ObjectId, ref: 'User'},
// text: {type: String, required: [true, "question required"], minlength: [15, 'question must be at least 15 characters long']},

// var FavoriteSchema = new mongoose.Schema({
//   _user: {type: Schema.Types.ObjectId, ref: 'User'},
//   _comment:{type: Schema.Types.ObjectId, ref: 'Comment'},
// })

// var PostSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   user: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
//   comments: [{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}],
//   upvotes: {type:Number, default:0, required: true},
//   downvotes: {type:Number, default:0, required: true},
// }, {timestamps: true });
