const dots = document.querySelector('.dots')
console.log(dots)




dots.addEventListener('click', (el) =>{
  const dot = el.target
  if(dot.classList.contains('active')){
    dot.classList.remove('active')
    console.log('remove active')
  } else {
    console.log('adciona active')
    dot.classList.add('active')

  }
})
