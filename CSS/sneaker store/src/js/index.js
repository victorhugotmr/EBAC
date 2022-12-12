import '../scss/styles.scss'


const date = new Date()
let year = date.getFullYear()

console.log(year)

document.querySelector('#year').innerHTML = '<b>S</b>neaker <b>S</b>tore ' + year
