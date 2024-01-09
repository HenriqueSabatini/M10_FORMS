$('#telefone').mask('(00) 00000-0000',{ 
    placeholder: '(__) _____-____'
})

$('#CEP').mask('00000-000',{ 
    placeholder: '_____-___'
})

$(document).ready(function(){
    $('form').validate({ 
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            CEP: {
                required: true
            }                    
        },
        messages:{ //aqui definimos as mensagens obrigatorias em cada campo
            nome: 'Por favor, insira seu nome'
        }, 
        //abaixo vamos adicionar um pop-up para o usuario mostrando quantos campos estao incorretos no formulario
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
