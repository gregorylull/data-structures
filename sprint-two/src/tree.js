var makeTree = function(value){
    var newTree = {};
    newTree.value = value;
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

    // add the tree to the forest
    this.children.push(treeChild);
};

treeMethods.contains = function(target){
    
    if (target === this.value) {
        return true;
    } else if ( this.children === undefined ) {
        return false;
    } else {
        this.children.contains(target);
    }
};
