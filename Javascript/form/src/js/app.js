const form = document.querySelector("#form")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const cpf = document.querySelector("#cpf")
const cep = document.querySelector("#cep")
const message = document.querySelector("#message")
const notNull = document.getElementsByClassName("not-null")

console.log(notNull)


function isEmpty(elem) {
  return elem.value.length < 1 ? `The field <strong>${elem.name}</strong> can't be empty.` : ''
}


form.addEventListener("submit", function(event){
  event.preventDefault()
  
  let msg = []
  let markup = ''

  Array.from(notNull).forEach(field => {
    let fieldState = isEmpty(field)
    msg.push(fieldState)
  })

  msg.forEach(item => {
    markup += `<p>${item}</p>`
  })
  
  message.innerHTML = markup
})