let isHidden: boolean = true;
const total: number = 12312;
const someStr: string = "asd";

function sum(a: number, b: number): number | null {
  if (a === null || b === null) {
    return null;
  }

  //...
  return a + b;
}

const a: [string, boolean] = ["asd", true];

interface Obj1 {
  a: number;
  isHidden: boolean;
  color?: string | null;
}

const obj1: Obj1 = {
  a: 0,
  isHidden: true,
  color: null,
};

const array: Array<number | string | boolean> = [1, 0, true, 5];

class Animal {
  constructor(name: string, public weight: number) {
    this.name = name;
  }

  private name: string;
  private breed: string;
  size: "S" | "M" | "L";

  setName(newName: string, threadName: string = "main") {
    // console.log(threadName);

    this.name = newName;
  }

  getName() {
    return this.name;
  }

  makeSound() {}
}

class Dog extends Animal {
  makeSound(): void {
    console.log("гав");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("мяу");
  }
}

let animal1: Animal = new Dog("Jack", 10);
animal1 = new Cat("Barsik", 10);

// console.log(animal1.getName());

animal1.size = "L";

animal1.setName("not Jack");

// console.log(animal1.getName());

// =================================

class Point {
  constructor(public x: number, public y: number) {}
}

class Line {
  static debug() {}

  static metadata: string;

  constructor(start: Point, end: Point) {
    this.start = start;
    this.end = end;
  }

  start: Point;
  end: Point;

  print() {
    console.log(
      `start: ${this.start.x}, ${this.start.y}, end: ${this.end.x}, ${this.end.y}`
    );
  }
}

const p1 = new Point(0, 10);

const p2 = new Point(20, 30);
const myLine = new Line(p1, p2);
myLine.print();

// ? sdfsdvds

const config = "host:https://mydb.kemalkalandarov.com;port:3000";

interface ConnectConfig {
  host: string;
  port: number;
}

const configObj: ConnectConfig = {
  host: "https://mydb.kemalkalandarov.com",
  port: 3000,
};

abstract class Database<ConfType> {
  abstract connect(config: ConfType);
  disconnect() {
    console.log("disconnected");
  }
  isConnected: boolean;
}

class PG<ConfType> extends Database<ConfType> {
  connect(config: ConfType, port?: number) {
    console.log("connected to pg");
  }
}

class MySQL<T> extends Database<T> {
  connect(config: T) {
    console.log("connected to msql");
  }
}

// index.ts
let db: Database<string>;
if ("pg" === "pg") {
  db = new PG<string>();
  db.connect(config);
} else {
  db = new MySQL<string>();
  db.connect(config);
}

db.disconnect();
