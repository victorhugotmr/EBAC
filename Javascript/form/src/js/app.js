const formValidate = document.querySelector("#formValidate")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const cpf = document.querySelector("#cpf")
const messageForm = document.querySelector("#messageForm")
const formCEP = document.querySelector("#formCEP")
const cep = document.querySelector("#cep")
const rua = document.querySelector("#rua")
const bairro = document.querySelector("#bairro")
const cidade = document.querySelector("#cidade")
const uf = document.querySelector("#uf")
const messageCEP = document.querySelector("#messageCEP")
const notNull = document.getElementsByClassName("not-null")

console.log(formValidate, formCEP)

function isEmpty(elem) {
  return elem.value.length < 1 ? `The field <strong>${elem.name}</strong> can't be empty.` : ''
}


function validateEmail(elem){
  return elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : `Invalid <strong>e-mail</strong>`
}

formValidate.addEventListener("submit", function(event){
  event.preventDefault()
  
  let msg = []
  let markup = ''

  Array.from(notNull).forEach(field => {
    let fieldState = isEmpty(field)
    msg.push(fieldState)
  })
  
  const isEmail = validateEmail(email)
  if(isEmail) msg.push(isEmail)

  msg.forEach(item => {
    markup += `<p>${item}</p>`
  })

  messageForm.innerHTML = markup

})


function validaCEP(elem){
  if(!elem.value.match(/^[0-9]{8}/))
    return `Digite um CEP válido`
  else return ''
}

function updateAdress(data){
  if(!('erro' in data)){
    rua.value = (data.logradouro)
    bairro.value = (data.bairro)
    cidade.value = (data.localidade)
    uf.value = (data.uf)
  } else {
    message.innerHTML = `CEP não encontrado`
  }
}

formCEP.addEventListener("submit", function(event){
  event.preventDefault()
  
  let msg = []

  const isCEP = validaCEP(cep)
  if(isCEP){
    msg.push(isCEP)
  } else {
    const script = document.createElement('script')
    document.body.appendChild(script)
    script.src = 'https://viacep.com.br/ws/' + cep.value + '/json?callback=updateAdress'
  }
})

  