class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()];
  }
}
// code

class Human {
  constructor() {
    this.creator = "God";
  }
}

class Man extends Human {
  constructor() {
    super();
    this.name = "Adam";
  }
}

class Woman extends Human {
  constructor() {
    super();
    this.name = "Eve";
  }
}
