// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){
   

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

   //  console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })
     
     $('#form-submit').on('click', function(e){
      e.preventDefault()

      if( $('#email').val() != ''){
         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, 500, function(){
            console.log($(this).val())
         })
      };

    

     })

     $('.nav-modal-open').on('click', function(e){

      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#modalId'))

      myModal.show()


   })

   function validate( elem ){

      if( elem.val() == ''){

         console.log('o campo ' + elem.attr('name') + ' está incorreto')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
      } else {
         elem.parent().find('.text-muted').hide()

         elem.removeClass('invalid')
      }
   }

   function validateName( elem ){

      const nomeRegex = elem.val().match(/^[a-zA-Z]{2,}/)

      if( elem.val() != nomeRegex ) {

         console.log('o campo ' + elem.attr('name') + ' está incorreto')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
         
      } else {
         elem.parent().find('.text-muted').hide()

         elem.removeClass('invalid')
      }
   }

   function validateEmail( elem ){

      const emailRegex = elem.val().match(/[\w._-]+@[\w._-]+\.[\w]{2,}/)

      if( elem.val() != emailRegex ) {

         console.log('o campo ' + elem.attr('name') + ' está incorreto')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false

         } else {

         elem.parent().find('.text-muted').hide()

         elem.removeClass('invalid')
      }
   }

   function validateCPF( elem ){

      const cpfRegex = elem.val().match(/^[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}$/)

      if( elem.val() != cpfRegex ) {

         console.log('o campo ' + elem.attr('name') + ' está incorreto')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
         
      } else {
         elem.parent().find('.text-muted').hide()

         elem.removeClass('invalid')
      }
   }

   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')

      validate(inputName)
      validate(inputEmail)

      if(inputName.hasClass('invalid') || inputEmail.hasClass('invalid')){

         return false

      } else {
         
         $(this).submit()
         
      }
      
   })


   $('body').on('blur', '#nome', function(){
      validateName($(this))
   })

   $('body').on('blur', '#email', function(){
      validateEmail($(this))
   })

   $('body').on('focus', '#date', function(){
      $((this)).datepicker();
   })

   $('body').on('blur', '#date', function(){
      validate($(this))
      $((this)).mask('00/00/0000');
   })

   $('body').on('blur', '#time', function(){
      validate($(this))
      $((this)).mask('00:00');
   })

   $('body').on('blur', '#date_time', function(){
      validate($(this))
      $((this)).mask('00/00/0000 00:00:00');

   })

   $('body').on('blur', '#cep', function(){
      validate($(this))
      $((this)).mask('00000-000');

   })

   $('body').on('blur', '#phone', function(){
      validate($(this))
      $((this)).mask('(00) 00000-0000');


   })

   $('body').on('blur', '#cpf', function(){
      validateCPF($(this))
      $((this)).mask('000.000.000-00');


   })

})
