var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};


var treeMethods = {};

// takes a value, creates a new tree, and add tree to a children ARRAY
treeMethods.addChild = function(value){
  var treeChild = makeTree(value);

  // if children is undefined, create a container, 'empty forest'
  if (this.children === undefined) {
    this.children = [];
   }

  // set its parent to the previous node
  treeChild.parent = this;

  // add the tree to the forest
  this.children.push(treeChild);
};

treeMethods.removeFromParent = function () {
  // temporarily save a reference to the current tree
  var currentTree = this;

  // iterate through siblings

  // set parent tree's 
  currentTree.parent.children = undefined;

  currentTree.parent = null;

  return currentTree;
};

treeMethods.contains = function(target) {
  // if the current tree contains the value, return true
  if ( target === this.value ) {
    return true;

    // return false if the current tree has no children (no more values to check!)
  } else if ( this.children === undefined ) {
    return false;

    // else check the children array, which consists of tree objects.
    // for each of those child tree objects, call .contains on it
  } else {
    for (var i = 0; i < this.children.length; i++) {
      var childTree = this.children[i];
      if (childTree !== null && childTree.contains(target)) {
        return true
      }
    }
    return false;
  }
};

/***************************
  linked list

  rationale: instead of a children array, trees are linked together
****************************/