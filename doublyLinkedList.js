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

  /**
   * Add a node at the end
   * @param {*} value
   * @returns
   */
  push(value) {
    if (this.length === 0) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length++;
      return this;
    }
    const newTail = new Node(value);
    // assign previous ref for newly tail
    newTail.previous = this.tail;
    this.tail.next = newTail;
    // assign new tail
    this.tail = newTail;
    this.length++;
    return this;
  }

  /**
   * Add a node to the beginning
   * @param {*} value
   * @returns
   */
  unshift(value) {
    const newHead = new Node(value);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      newHead.previous = this.tail;
      this.head.previous = newHead;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  /**
   * Should remove a node at the beginning
   * @returns
   */
  shift() {
    // check
    if (this.length < 1) {
      console.warn('Nothing to remove');
      return undefined;
    }
    const currHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
      this.length--;
      return currHead.value;
    }

    const newHead = this.head.next;
    newHead.next = this.head.next.next;
    this.head = newHead;
    this.length--;

    return currHead.value;
  }

  /**
   * Should remove a node at the end
   * @returns
   */
  pop() {
    // check
    if (this.length < 1) {
      console.warn('Nothing to remove');
      return undefined;
    }
    const removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
      this.length--;
      return removed.value;
    }
    const newTail = this.tail.previous;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return removed.value;
  }

  /**
   * Remove a node by given index
   * @param {Number} index
   * @returns
   */
  remove(index) {
    // check params
    if (index < 0 || index >= this.length) {
      console.warn('Invalid index');
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const nodeToRemove = this._get(index);
    const previousNode = nodeToRemove.previous;
    const nextNode = nodeToRemove.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    this.length--;
    return nodeToRemove.value;
  }

  /**
   * Update the value of a node at a given index
   * @param {Number} index
   * @param {*} value
   */
  set(index, value) {
    // check
    if (index > this.length) {
      return false;
    }
    const node = this._get(index);
    node.value = value;
    return true;
  }

  /**
   * Reverse all of the nodes
   * @returns
   */
  reverse() {
    if (!this.head.next) {
      return this;
    }
    this.tail = this.head;

    let temp = null;
    let current = this.head;
    while (current != null) {
      temp = current.previous;
      current.previous = current.next;
      current.next = temp;
      current = current.previous;
    }

    if (temp != null) {
      this.head = temp.previous;
    }

    return this;
  }

  /**
   * Find a node at given index
   * @param {Number} index
   * @returns
   */
  _get(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  /**
   * Insert a node at given index with given value
   * @param {Number} index
   * @param {*} value
   */
  _insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.push(value);
    }

    if (index === 0) {
      return this.unshift(value);
    }

    const newNode = new Node(value);
    const leader = this._get(index - 1);
    const holdingPoiner = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = holdingPoiner;
    holdingPoiner.previous = newNode;
    this.length++;
    return this;
  }

  /**
   * Convert link list to array
   * @returns {Array}
   */
  convertToArray() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
