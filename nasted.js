const collage = {
    name: 'Raigaon',
    class: ['12', '13'],
    events: ['scinence fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
// console.log(collage.unique.color)
collage.unique.result.merit = 'top top top most'
console.log(collage.unique.result.merit)

collage.events[1]='16 december'
console.log(collage.events[1])
delete collage.class
console.log(collage)

const value = Object.values(collage.unique.result)
console.log(value)