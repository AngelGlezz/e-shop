$(document).ready(function(){
	$('#buscador').keyup(function(){
        var nombres = $(".name_article").text();
        console.log(nombres);
        var buscando = $(this).val();
        var item = '';
        for(var i = 0; i < nombres.length; i++){
            item = $(nombres[i]).html().toLowerCase();
            for(var x = 0; x < item.length; x++ ){
                if( buscando.length == 0 || item.indexOf(buscando) > -1 ){
                    $(nombres[i]).parents('.content_article').show(); 
                }else{
                    $(nombres[i]).parents('.content_article').hide();
                }
            }
        }
    });
});

