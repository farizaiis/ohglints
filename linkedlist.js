class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    inserFirst(data) {
      this.head = new Node(data, this.head);
      this.size++;
    }
  
    printAll() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    clearList() {
      this.head = null;
      this.size = 0;
    }
  
    // Insert last node
    insertLast(data) {
      let node = new Node(data);
      let current;
  
      // If empty, make head
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size++;
    }
  
    insertAt(data, index) {
      //  If index is out of range
      if (index > 0 && index > this.size) {
        console.log("Out of index");
        return;
      }
  
      // If first index
      if (index === 0) {
        this.insertFirst(data);
        return;
      }
  
      const node = new Node(data);
      let current, previous;
  
      // Set current to first
      current = this.head;
      let count = 0;
  
      while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
      }
  
      node.next = current;
      previous.next = node;
  
      this.size++;
    }
  
    getAt(index) {
      let current = this.head;
      let count = 0;
  
      while (current && count <= index) {
        if (count == index) {
          console.log(current.data);
        }
        count++;
        current = current.next;
      }
  
      return;
    }
  
    removeAt(index) {
      if (index > 0 && index > this.size) {
        return;
      }
  
      let current = this.head;
      let previous;
      let count = 0;
  
      // Remove first
      if (index === 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
  
        previous.next = current.next;
      }
  
      this.size--;
    }
  }
  
  let node = new Node(100);
  console.log(node);
  
  const linked = new LinkedList();
  linked.inserFirst(100);
  linked.inserFirst(200);
  linked.inserFirst(300);
  linked.insertLast(400);
  console.log(linked.printAll());
  
  linked.insertAt(500, 2);
  linked.removeAt(2)
  console.log(linked.printAll());