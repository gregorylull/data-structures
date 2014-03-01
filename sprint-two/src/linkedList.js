var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Add a new node to the list
    var newNode = makeNode(value);
    
    // first time adding a node
    if (this.head === null) {
      // if yes, add a node to list and point head to newnode
        this.head = newNode;
        this.tail = newNode;
    } 
    // first set current tail's next node as the newly created
    this.tail.next = newNode;

    // for doublylinked list, the newNode should point to its parent
    newNode.previous = this.tail

    // now set tail to the last node (which IS the new node)
    this.tail = newNode;
  };

  // 1. find head object and get value
  list.removeHead = function(){
    var headObj = this.head;
    var value = headObj.value;

    // 2. set 'head' property to the next object
    this.head = this.head.next

    // 3. set the new head's 'previous' property to null
    this.head.previous = null

    // return the value
    return value;
  };

  list.removeTail = function () {
    var tailObj = this.tail;

    // 1. re set 'tail' property to the parent node of the newly removed obj
    this.tail = tailObj.previous;

    // 2. set new tail's 'next' property to null
    this.tail.next = null;

    return tailObj.value;

  };

  list.contains = function(target) {
    // start off with the head of the list
    node = this.head;
     
    var findValue = function (target, node) {
          	  
    // if current node is undefined it means either
    // the list is empty or we are at the end of the list 
    if (node === null) {
      return false;
    } else if (target === node.value) {
      return true;
    } else {
      // pass in the NEXT linked node 
      return findValue(target, node.next);
    }
      };

      return findValue(target, node);
  };

  list.removeNode = function (node) {
    
    // if there is a 'previous' node, change its 'next' property to current object's 'next' node
    if (node.previous !== null) {
      node.previous.next = node.next;

    // if previous is null, then 'node' is the head
    } else {
      return node.removeHead();
    }

    // if there is a 'next' node, then set previous node's 'next' property to this's next node
    if (node.next !== null) {
      node.next.previous = node.previous;

    // if the next node is null, then the current object is the tail 
    } else {
      return node.removeTail();
    }

    return node.value;
  };

  return list;
};



var makeNode = function(value){
  //Don't change this code
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  
  return node;
};
