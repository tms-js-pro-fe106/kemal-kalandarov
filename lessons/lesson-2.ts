let isHidden: boolean = true;
const total: number = 12312;
const someStr: string = "asd";

interface MyButtonProps {
  label: string;
  disabled: boolean;
  color: string;
}

function MyButton(props: MyButtonProps) {}

type MyGreyButtonPros = Pick<MyButtonProps, "color" | "label">;

function MyGreyButton(props: Omit<MyButtonProps, "color">) {}

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

class Flyable {
  fly() {}
}

class Animal {
  constructor(name: string, public readonly weight: number) {
    this.name = name;
  }

  private name: string;
  protected breed: string;
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

class Duck extends Animal {
  constructor(
    name: string,
    public readonly weight: number,
    public skills: Flyable
  ) {
    super(name, weight);
  }

  makeSound(): void {
    this.skills.fly();
    console.log("кря");
  }

  fly() {
    this.skills.fly();
  }
}

const aaaa = new Duck("", 4, new Flyable());

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

  static printMeta() {
    console.log("class metadata");
  }

  print() {
    console.log(
      `start: ${this.start.x}, ${this.start.y}, end: ${this.end.x}, ${this.end.y}`
    );
  }
}

const p1 = new Point(0, 10);

const p2 = new Point(20, 30);
const myLine = new Line(p1, p2);

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

function sum2<T>(a: T, b: T) {
  return a + b;
}

sum2(0, 9);
sum2<string>("123", "123");

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

"asdasd".includes("");
