let sayi1 = 10;
sayi1 = "Engin";

let student = { id: 1, name: "Beyza" };
//console.log(student);

function save(puan = 10, ogrenci) {
  console.log(ogrenci.name + " : " + puan);
}
//save(undefined,student);

let students = ["Engin Demiroğ", "Halit Kalaycı ", "Beyza Altıntoprak"];
//console.log(students)

let students2 = [
  student,
  { id: 2, name: "halit" },
  "ankara",
  { city: "istanbul" },
];
//console.log(students2)

//rest
//params
//varArgs
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products[0]);
};

//console.log(typeof showProducts)
//showProducts(10,"elma","armut","karpuz")

//spread - Ayrıştırmak
let points = [1, 2, 3, 4, 50, 14];
console.log(...points);
console.log(Math.max(...points));
console.log(..."ABC", "D", ..."EFG", "H");

//Destructuring - arraylerin değerlerini değişkenlere atamak için kullanılır

let populations = [10000, 20000, 30000, [40000, 10000]];
let [small, medium, high, [veryHigh, maximum]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunction([small1], number) {
  console.log(small1);
}

someFunction(populations);

//Obje Destructuring

let category = { id: 1, name: "İçecek" };
//console.log(category.id)
//console.log(category["name"])

let { id, name1 } = category;
console.log(id);
console.log(name1);
