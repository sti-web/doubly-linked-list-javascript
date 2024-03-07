# Doubly linked list

Doubly linked list implemented with javascript classes

Introduction to Doubly Linked List: https://www.geeksforgeeks.org/data-structures/linked-list/doubly-linked-list/

Doubly Linked List with unit tests coverage

Given the following classes:

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }
}
```

Implement the following on the `DoublyLinkedList` class

### push

This function should add a node at the end of the DoublyLinkedList. It should return the list so that the method can be chained.

### pop

This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.

### unshift

This function should add a node to the beginning of the DoublyLinkedList. It should return the list so that the method can be chained.

### shift

This function should remove a node at the beginning of the DoublyLinkedList. It should return the node removed.

### set

This function should update the value of a node at a given index of the DoublyLinkedList. It should return true if the node is updated successfully, or false if an invalid index is passed in.

### \_get

This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.

### \_insert

This internal/helper function should insert a node at a specified index in a DoublyLinkedList. It should return the new length of the DoublyLinkedList.

### remove

This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node.

### reverse

This function should reverse all of the nodes in a DoublyLinkedList. It should return the reversed DoublyLinkedList.

![All tests passed](https://res.cloudinary.com/adhoonline/image/upload/v1705612662/_Users_stiweb_sites_learning_singly-linked-list_index-portrait_bi9pot.png)

_Слава Україні!_
