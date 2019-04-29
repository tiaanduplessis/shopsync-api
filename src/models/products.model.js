// products-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const products = new Schema({
    name: { type: String, required: true },
    groupId:  { type: Schema.ObjectId, ref: 'groups'},
    marked: Boolean
  }, {
    timestamps: true
  });

  return mongooseClient.model('products', products);
};
