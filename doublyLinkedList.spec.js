var expect = chai.expect;
var doublyLinkedList;
var node;

beforeEach(function () {
  doublyLinkedList = new DoublyLinkedList();
  node = new Node(15);
});

describe('#doublyLinkedList', function () {
  it('contains a head that is null', function () {
    expect(doublyLinkedList.head).to.equal(null);
    expect(doublyLinkedList.tail).to.equal(null);
    expect(doublyLinkedList.hasOwnProperty('head')).to.equal(true);
    expect(doublyLinkedList.hasOwnProperty('tail')).to.equal(true);
  });
  it('contains a length property that begins at 0', function () {
    expect(doublyLinkedList.length).to.equal(0);
    expect(doublyLinkedList.hasOwnProperty('length')).to.equal(true);
  });
});

describe('#Node', function () {
  it('contains a value', function () {
    expect(node.value).to.equal(15);
    expect(node.hasOwnProperty('value')).to.equal(true);
    expect(node.hasOwnProperty('next')).to.equal(true);
  });
});

describe('#push', function () {
  it('inserts a node at the end of the list and increments the length of the list', function () {
    doublyLinkedList.push(5);
    expect(doublyLinkedList.length).to.equal(1);
    expect(doublyLinkedList.head.value).to.equal(5);
    doublyLinkedList.push(10);
    expect(doublyLinkedList.length).to.equal(2);
    expect(doublyLinkedList.head.next.value).to.equal(10);
    expect(doublyLinkedList.tail.previous.value).to.equal(5);
    doublyLinkedList.push(15);
    expect(doublyLinkedList.length).to.equal(3);
    expect(doublyLinkedList.head.next.next.value).to.equal(15);
    expect(doublyLinkedList.tail.previous.value).to.equal(10);
    expect(doublyLinkedList.tail.previous.previous.value).to.equal(5);
  });
  it('returns the doublyLinkedList so that the method can be chained', function () {
    doublyLinkedList.push(5).push(10).push(15);
    expect(doublyLinkedList.length).to.equal(3);
    expect(doublyLinkedList.head.next.next.value).to.equal(15);
    expect(doublyLinkedList.tail.previous.previous.value).to.equal(5);
  });
});

describe('#pop', function () {
  it('removes a node at the end of the list and decrements the length of the list', function () {
    doublyLinkedList.push(5).push(10).push(15).push(20);
    expect(doublyLinkedList.length).to.equal(4);
    expect(doublyLinkedList.pop()).to.equal(20);
    expect(doublyLinkedList.length).to.equal(3);
    expect(doublyLinkedList.head.next.next.value).to.equal(15);
    expect(doublyLinkedList.tail.value).to.equal(15);
    expect(doublyLinkedList.tail.previous.value).to.equal(10);
    expect(doublyLinkedList.tail.previous.previous.value).to.equal(5);
    expect(doublyLinkedList.tail.previous.previous.previous).to.equal(null);
  });
  it('returns undefined if there are no nodes to remove', function () {
    expect(doublyLinkedList.pop()).to.equal(undefined);
    expect(doublyLinkedList.length).to.equal(0);
  });
});

describe('#unshift', function () {
  it('inserts a node at the beginning of the list and increments the length of the list', function () {
    doublyLinkedList.unshift(5);
    expect(doublyLinkedList.length).to.equal(1);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.unshift(10);
    expect(doublyLinkedList.length).to.equal(2);
    expect(doublyLinkedList.head.value).to.equal(10);
    expect(doublyLinkedList.head.next.value).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.tail.previous.value).to.equal(10);
    doublyLinkedList.unshift(15);
    expect(doublyLinkedList.length).to.equal(3);
    expect(doublyLinkedList.head.value).to.equal(15);
    expect(doublyLinkedList.head.next.value).to.equal(10);
    expect(doublyLinkedList.head.next.next.value).to.equal(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.tail.previous.value).to.equal(10);
    expect(doublyLinkedList.tail.previous.previous.value).to.equal(15);
  });
  it('returns the doublyLinkedList so that the method can be chained', function () {
    doublyLinkedList.unshift(5).unshift(10).unshift(15);
    expect(doublyLinkedList.length).to.equal(3);
    expect(doublyLinkedList.head.next.next.value).to.equal(5);
  });
});

describe('#shift', function () {
  it('should remove a node from the beginning of the list', function () {
    doublyLinkedList.push(25).push(30);
    doublyLinkedList.shift();
    expect(doublyLinkedList.length).to.equal(1);
    expect(doublyLinkedList.head.value).to.equal(30);
    expect(doublyLinkedList.tail.value).to.equal(30);
  });

  it('removes a node at the beginning of the list and decrements the length of the list', function () {
    doublyLinkedList.push(5).push(10).push(15).push(20);
    expect(doublyLinkedList.length).to.equal(4);
    expect(doublyLinkedList.shift()).to.equal(5);
    expect(doublyLinkedList.length).to.equal(3);
    expect(doublyLinkedList.shift()).to.equal(10);
    expect(doublyLinkedList.length).to.equal(2);
    expect(doublyLinkedList.shift()).to.equal(15);
    expect(doublyLinkedList.length).to.equal(1);
    expect(doublyLinkedList.shift()).to.equal(20);
    expect(doublyLinkedList.length).to.equal(0);
  });
  it('returns undefined if there are no nodes to remove', function () {
    expect(doublyLinkedList.shift()).to.equal(undefined);
    expect(doublyLinkedList.length).to.equal(0);
  });
});

describe('#set', function () {
  it('finds a node and replaces its value or returns undefined if the node is not found', function () {
    doublyLinkedList.push(5).push(10).push(15).push(20);
    expect(doublyLinkedList.length).to.equal(4);
    doublyLinkedList.set(0, 9);
    expect(doublyLinkedList.length).to.equal(4);
    expect(doublyLinkedList.head.value).to.equal(9);
    doublyLinkedList.set(10, 10); // should ignore
    expect(doublyLinkedList.length).to.equal(4);
    expect(doublyLinkedList.head.value).to.equal(9);
    doublyLinkedList.set(2, 100);
    expect(doublyLinkedList.length).to.equal(4);
    expect(doublyLinkedList.head.next.next.value).to.equal(100);

    expect(doublyLinkedList.tail.value).to.equal(20);
    expect(doublyLinkedList.tail.previous.value).to.equal(100);
    expect(doublyLinkedList.tail.previous.previous.value).to.equal(10);
    expect(doublyLinkedList.tail.previous.previous.previous.value).to.equal(9);
    expect(doublyLinkedList.tail.previous.previous.previous.previous).to.equal(
      null
    );
  });
});

describe('#_get', function () {
  it('finds a node and returns its value ', function () {
    doublyLinkedList.push(5).push(10).push(15).push(20);
    expect(doublyLinkedList._get(0).value).to.equal(5);
    expect(doublyLinkedList._get(1).value).to.equal(10);
    expect(doublyLinkedList._get(2).value).to.equal(15);
    expect(doublyLinkedList._get(3).value).to.equal(20);
    expect(doublyLinkedList._get(4)).to.equal(null);
  });
});

describe('#_insert', function () {
  it('inserts a node and correct adjusts the next and previous properties of other nodes', function () {
    doublyLinkedList.push(5).push(10).push(15).push(20);
    doublyLinkedList._insert(2, 12);
    expect(doublyLinkedList.length).to.equal(5);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.head.next.value).to.equal(10);
    expect(doublyLinkedList.head.next.next.value).to.equal(12);
    expect(doublyLinkedList.head.next.next.next.value).to.equal(15);
    expect(doublyLinkedList.head.next.next.next.next.value).to.equal(20);

    expect(doublyLinkedList.tail.value).to.equal(20);
    expect(doublyLinkedList.tail.previous.value).to.equal(15);
    expect(doublyLinkedList.tail.previous.previous.value).to.equal(12);
    expect(doublyLinkedList.tail.previous.previous.previous.value).to.equal(10);
    expect(
      doublyLinkedList.tail.previous.previous.previous.previous.value
    ).to.equal(5);
    expect(
      doublyLinkedList.tail.previous.previous.previous.previous.previous
    ).to.equal(null);
  });
});

describe('#remove', function () {
  it('contains a root that is null', function () {
    doublyLinkedList.push(5).push(10).push(15).push(20);
    doublyLinkedList.remove(2);
    expect(doublyLinkedList.length).to.equal(3);
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.head.next.value).to.equal(10);
    expect(doublyLinkedList.head.next.next.value).to.equal(20);

    expect(doublyLinkedList.tail.value).to.equal(20);
    expect(doublyLinkedList.tail.previous.value).to.equal(10);
    expect(doublyLinkedList.tail.previous.previous.value).to.equal(5);
    expect(doublyLinkedList.tail.previous.previous.previous).to.equal(null);
  });
});

describe('#reverse', function () {
  it('reverses all of the nodes', function () {
    doublyLinkedList.push(5).push(10).push(15).push(20);
    doublyLinkedList.reverse();
    expect(doublyLinkedList.length).to.equal(4);
    expect(doublyLinkedList.head.value).to.equal(20);
    expect(doublyLinkedList.head.next.value).to.equal(15);
    expect(doublyLinkedList.head.next.next.value).to.equal(10);
    expect(doublyLinkedList.head.next.next.next.value).to.equal(5);

    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.tail.previous.value).to.equal(10);
    expect(doublyLinkedList.tail.previous.previous.value).to.equal(15);
    expect(doublyLinkedList.tail.previous.previous.previous.value).to.equal(20);
    expect(doublyLinkedList.tail.previous.previous.previous.previous).to.equal(
      null
    );
  });
});

describe('#convertToArray', function () {
  it('should convert the linked list to an array', function () {
    doublyLinkedList.push(5).push(10).push(15).push(20);
    var arr = doublyLinkedList.convertToArray();
    expect(arr).to.deep.equal([5, 10, 15, 20]);
  });
});
