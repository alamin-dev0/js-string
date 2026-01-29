const country = 'Bangladesh'
console.log(country.length)
const desh = country.slice(6, 11)
console.log(desh)
const bangla = country.slice(0, 6)
console.log(bangla)

const sentence = 'I am a good and hardworking person.'
// console.log(sentence.split(' '))
console.log(sentence.split('a'))

const friendsStr = 'Rahim,korim,jolim,dolim,jalim,dalim'
const friend = friendsStr.split(',')
// console.log(friend)


const realFd =[ 'Rahim', 'korim', 'jolim', 'dolim', 'jalim', 'dalim' ]
console.log(realFd.join('<<|----------|>>'))