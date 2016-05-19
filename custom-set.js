function CustomSet(elements) {
  this.set = {};
  elements.forEach(function(element) {
    this.set[element] = element;
  }, this);

  this.delete = function(value) {
    if(value in this.set){
      delete this.set[value];
    }
    return this;
  };

  this.difference = function(otherSet) {
    
  }

  this.eql = function(otherSet) {
    return this.subset(otherSet) &&
      otherSet.subset(this);
  };

  this.subset = function(otherSet) {
    for (var key in otherSet.set) {
      if (this.set[key] !== otherSet.set[key]) {
        return false;
      }
    }
    return true;
  };
}

module.exports = CustomSet;
