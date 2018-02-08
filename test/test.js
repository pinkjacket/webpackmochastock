var Triangle = require("./../src/triangle.js").triangleModule;
var expect = require("chai").expect;

describe('Triangle', function() {
  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableTriangle);
  });

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5)
    expect(triangle.side1).to.equal(3)
    expect(triangle.side2).to.equal(4)
    expect(triangle.side3).not.to.equal(6)
  });

  it("should correctly determine whether three lengths can be made into a triangle", function() {
    var notTriangle = new Triangle(3, 9, 22)
    expect(notTriangle.checkType()).to.equal("not a triangle");
  });

});
