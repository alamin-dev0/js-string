const person = {
    name: 'Sodor Uddin',
    age: 25,
    profession: 'devloper',
    salary: 25000,
    madrid: true,
    'fav place': ['bandorban', 'sanitmartin', 'Kuakata']

}
// console.log(person)

//dot notation
// dot symble diye object er property er value access kora
console.log(person.age)
const tk = person.salary
console.log(tk)

// bracket notation
// third bracket diye access kora 
const work = person['profession']
console.log(work)

//error

// console.log(person.'fav place')
console.log(person["fav place"])


const keyName = 'profession'
console.log(person[keyName])
console.log(person)