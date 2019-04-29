const groups = require('./groups/groups.service.js');
const products = require('./products/products.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(groups);
  app.configure(products);
  app.configure(users);
};
