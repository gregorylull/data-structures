var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
    // if storage is undefined, then it is empty. create empty object literal
    if( this._storage === undefined ) {
        this._storage = {};
    }

    this._storage[item] = true;
};

// returns true if _.storage has a 'key name' === target item
setPrototype.contains = function(item){
    return this._storage.hasOwnProperty(item);
};

// if _.storage has a own property name === target, that property will be deleted from storage
setPrototype.remove = function(item){
    if (this._storage.hasOwnProperty(item)) {
        delete this._storage[item];
    }
};
