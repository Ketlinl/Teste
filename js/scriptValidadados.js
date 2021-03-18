$(function () {
    var $inputs = $("input", "#formName"),
        $button = $("#botao");

    var limpos = 0;

    // verificação inicial
    $inputs.each(function () {
        var $this = $(this);
        var val = $this.val();
        val || limpos++;
        $this.data("val-antigo", val);
    });

    $button.prop("disabled", !!limpos);

    $inputs.on("change keyup mouseup", function () {
        var $this = $(this);
        var val = $this.val();
        limpos += (val ? 0 : 1) - ($this.data("val-antigo") ? 0 : 1);
        $this.data("val-antigo", val);
        $button.prop("disabled", !!limpos);
    });
});




var cap = "";
var cap2 = "";
var cap3 = "";
function addListC  () {

    cap = document.getElementById('nome').value; 
    document.getElementById('nomeid').innerHTML = cap;
    cap2 = document.getElementById('email').value; 
    document.getElementById('emailid').innerHTML = cap2;
    cap3 = document.getElementById('tel').value; 
    document.getElementById('telid').innerHTML = cap3;
    }



    $(function(){
        $("#txtBusca").keyup(function(){
            var texto = $(this).val();
    
            $("#list li").css("display", "block");
            $("#list li").each(function(){
                if($(this).text().indexOf(texto) < 0)
                   $(this).css("display", "none");
            });
        });
    });