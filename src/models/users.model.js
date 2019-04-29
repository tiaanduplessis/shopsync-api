// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const users = new Schema({
    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
    name: { type: String },
    surname: { type: String },
    groupIds: [
      { type: Schema.ObjectId, ref: 'groups'}
    ],
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
