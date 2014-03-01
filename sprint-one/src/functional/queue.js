var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  // using closures so users cannot directly access/mess with the queues
  var storage = {};
  storage['length'] = 0;

  // size keeps track of the total size of the storage
  var size = 0;

  // keeps track of the beginning and end of the line
  var head = 0;
  var tail = 0;

  instance.enqueue = function(value){
    storage[storage['length']] = value;
    storage['length'] += 1;
  };

  instance.dequeue = function(){
    if(storage['length'] > 0) {
      var transientvalue = storage[0];

      for(var i = 0, l = storage['length']; i < l; i++){
        storage[i] = storage[i+1];
      }

      storage['length'] -=  1;
      return transientvalue;
    }
  };

  instance.size = function(){
    return storage['length'];
  };

  return instance;
};


