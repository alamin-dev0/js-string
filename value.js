const person = {
    name: 'Sodor Uddin',
    age: 25,
    profession: 'devloper',
    salary: 25000,
    madrid: true,
    'fav place': ['bandorban', 'sanitmartin', 'Kuakata']
}

person.salary = 30000;
person['age'] = 30
person["fav place"] = ['Dhaka','Rajshahi','Charging']
console.log(person)


const propName ='profession';
person[propName]='devops'
console.log(person)