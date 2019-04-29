module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const groups = new Schema({
    userIds: [
      { type: Schema.ObjectId, ref: 'users'}
    ],
    productIds: [
      { type: Schema.ObjectId, ref: 'products'}
    ],
  }, {
    timestamps: true
  });

  return mongooseClient.model('groups', groups);
};
