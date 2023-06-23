const should = require('should');
const User = function (name) {
  this.name = name;
};
describe('Checking if the user is created correctly', function () {
  it('should create the user with the correct name', function () {
    debugger;
    const tom = new User('tom');
    should(tom.name).be.equal('tom');
  });
});
