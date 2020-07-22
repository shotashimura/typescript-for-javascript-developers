export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, public speed: number) {
    //super()で親クラスからconstractorの引継ぎ
    super(name);
    this.speed = speed;
  }
  run(): string {
    //メソッドもsuperで呼び出し可能
    // const parentMessage = super.run();
    return `${super.run()} ${this.speed} km/h`;
  }
}

console.log(new Animal("Michy").run());
console.log(new Lion("Simba", 80).run());
