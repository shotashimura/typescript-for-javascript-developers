export {};

//TypeScriptでは、classの多重継承は許可されていないものの、
//interfaceの部分継承はできる

class MahouTsukai {}

class Souryo {}

class Taro extends MahouTsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.ionazun(); //ionazun!!
jiro.kougeki(); //kougeki!!
