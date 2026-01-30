const sentence = 'I am learning web Dev'

let reverse = '';
for (letter of sentence) {
    reverse = letter + reverse
}
// console.log(reverse)

let rev = ''
for (let i = 0; i < sentence.length; i++) {
    // console.log(i)
    // console.log(sentence[i])
    const letter = sentence[i]
    rev = letter + rev
}
// console.log(rev)


// shortcut
const rvess = sentence.split('').reverse().join('')
console.log(rvess)