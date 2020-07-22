export {};

//そもそもの原則として→保存場所やディレクトリが異なれば、同じ名前のファイルを作れる

//名前空間でclassを分けることにより、同名のclassを利用できる
namespace Japanese {
  //exportすると、namespace外でclassの利用が可能
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("simuwo");
const meOsaka = new Japanese.Osaka.Person("simuyan");
const michel = new English.Person("Michel", "Joseph", "Jackson");
