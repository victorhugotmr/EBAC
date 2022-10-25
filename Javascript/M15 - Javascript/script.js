let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.telefone');
let camposEmail = document.querySelectorAll('input.email');
let campoUF = document.querySelectorAll('input.uf');
let button = document.querySelectorAll('input.enviar')

function validaCampo(elemento){

  elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      if(this.value == ""){
          document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campo nome";
          this.classList.add('erro');
          console.log('nome')
          return false;
          
        } else {
          document.querySelector('.mensagem').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');
          this.parentNode.classList.add('erro');          
          this.classList.add('sucesso');
          this.parentNode.classList.add('sucesso');
      }

  });



}

function validaCampoNumerico(elemento){

  elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      let numero = this.value.match(/^[1-9]{5}[1-9]{4}$/) ? this.value.replace(/-/, "") : this.value; 

      if(numero != ""){
          document.querySelector('.mensagem').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');
          this.classList.add('sucesso');
          this.parentNode.classList.add('sucesso');

        } else {
          document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campo telefone";
          this.classList.add('erro');
          this.parentNode.classList.add('erro');
          return false;
      }

  });
}


function validaEmail(elemento){

  elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      const emailValido =  /^[\w._-]+@[\w._-]+\.[\w]{2,}/i;
      if(this.value.match(emailValido)) {
          document.querySelector('.mensagem').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');
          this.classList.add('sucesso');
          this.parentNode.classList.add('sucesso');
          console.log('deu certo o email')
      } else {
          document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campo email";
          this.classList.add('erro');
          this.parentNode.classList.add('erro');
          console.log('nao deu certo o email')

          return false;
      }

  });

}

function validaUF(elemento){

  elemento.addEventListener('focusout', function(event) {

      event.preventDefault();

      const UF = /^[A-Z]{2}$/i;
      if(this.value.match(UF)) {
          document.querySelector('.mensagem').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');          
          this.classList.add('sucesso');
          this.parentNode.classList.add('sucesso');
      } else {
          document.querySelector('.mensagem').innerHTML = "verifique o preenchimento do campo uf";
          this.classList.add('erro');
          this.parentNode.classList.add('erro');
          return false;
      }

  });

}


for( let emFoco of camposObrigatorios) {
  validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
  validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
  validaEmail(emFoco);
}

for( let emFoco of campoUF) {
  validaUF(emFoco);
}