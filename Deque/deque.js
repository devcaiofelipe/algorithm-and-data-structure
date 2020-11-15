class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  };

  isEmpty() {
    return this.count - this.lowestCount === 0;
  };

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  };

  removeBack() {
    if(this.isEmpty()) {
      return null;
    };

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  };

  removeFront() {
    if(this.isEmpty()) {
      return null;
    };

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  };;

  addFront(element) {
    if(this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for(let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      };
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    };
  };

  toString() {
    if(this.isEmpty()) {
      return '';
    };

    let objString = `${this.items[this.lowestCount]}`;

    for(let i = this.lowestCount +1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    };
    return objString;
  };

  size() {
    return this.count - this.lowestCount;
  };
};


module.exports = Deque;

const deque = new Deque();