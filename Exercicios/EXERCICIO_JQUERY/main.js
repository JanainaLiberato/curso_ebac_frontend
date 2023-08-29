$(document).ready(function(){


    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeDaTarefa = $('#nova-tarefa').val();
        const novoItem = $ ('<li></li>');
        $ (`<li>${ nomeDaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('li').click(function(){
            $(this).addClass("done");
        });
        $('#nova-tarefa').val("");
    })

        $("reset-btn")[0].reset();
})



    


    
   


