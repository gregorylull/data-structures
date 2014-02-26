var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  // using closures so users cannot directly access/mess with the queues
  var storage = {};

  // size keeps track of the total size of the storage
  var size = 0;

  // keeps track of the beginning and end of the line
  var head = 0;
  var tail = 0;

  instance.enqueue = function(value){
      storage[tail++] = value;
      size++;
  };

  instance.dequeue = function(){
      if (size > 0) {
          var item = storage[head++];      
          size--;
          
          return item;
      }
  };

  instance.size = function(){
      return size;
  };

  return instance;
};
