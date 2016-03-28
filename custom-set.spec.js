var CustomSet = require('./custom-set');

describe('CustomSet', function() {

  it('can compare equality of sets', function(){
    var subject = new CustomSet([3, 2, 1]);
    var duplicateSubject = new CustomSet([3, 2, 1]);
    expect(subject.eql(duplicateSubject)).toBe(true);

    var unOrderedDuplicateSubject = new CustomSet([3, 1, 2]);
    expect(subject.eql(unOrderedDuplicateSubject)).toBe(true);

    var nonDuplicateSubject = new CustomSet([2, 1]);
    expect(subject.eql(nonDuplicateSubject)).toBe(false);
  });
  
});
