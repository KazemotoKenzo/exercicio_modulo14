$(document).ready(function(){
    $('#telefone').mask('(00) 0 00000-0000');

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
                required: false
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Este campo é obrigatório',
            email: 'Este campo é obrigatório',
            mensagem: 'Este campo é obrigatório'
        }
    })
})