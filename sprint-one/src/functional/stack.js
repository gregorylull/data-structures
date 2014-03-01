var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  storage['length'] = 0;

  // Implement the methods below
  instance.push = function(value){
    storage[storage['length']] = value;
    storage['length'] += 1;
  };

  // should return the item popped off, and that object property should be deleted
  instance.pop = function(){
    if(storage['length'] > 0) {
      var transientvalue = storage[storage['length'] - 1];
      delete storage[storage['length']];
      storage['length'] -= 1;
      return transientvalue;
    }
  };

  instance.size = function(){
    return storage['length'];
  };

  return instance;
};
