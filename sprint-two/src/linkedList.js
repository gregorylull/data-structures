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

    // now set tail to the last node (which IS the new node)
    this.tail = newNode;

  };

  // 1. find head object and get value
  list.removeHead = function(){
    var headObj = this.head;
    var value = headObj.value;

    // 2. set head property to the next object
    this.head = this.head.next
    return value;
  };

  // list = {head: , tail: };
  // {node1, next: node2 }
  // {node2, next: node3 }
  // {node3, next: null}
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
