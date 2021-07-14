const person = [{
  name: "Adem",
  age: 25,
  languages: ["", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "JavaScript"],
  }
];

//Yaşı 30 dan büyük kişilerin getirilmesi
const newAgePerson=person.filter(item=>item.age>30);
console.log(newAgePerson);
//JavaScript bilen kişilerin getirilmesi
const newLanguagePerson=person.filter(item=>item.languages.includes("JavaScript"));
console.log(newLanguagePerson);

