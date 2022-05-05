// let calculatorMixin = Base => class extends Base {
//   calc() { 
//     console.log('calling calc class');
//   }
// };

// let randomizerMixin = Base => class extends Base {
//   randomize() { 
//     console.log('calling randomize class');
//   }
// };

// class Foo { 
//   food() {
//     console.log('calling foo class');
//   }
// }
// class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

// let bar = new Bar();
// bar.calc();
// bar.randomize();
// bar.food();