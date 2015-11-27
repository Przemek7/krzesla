$(document).ready(function(){
    var first = $(".menu li").first();
    var second = first.next();
    var third = second.next();

    first.on('click', function(){
        $(this).find(".sub-menu").toggle();
    });

   second.on('mouseenter', function(){
        console.log('asdasd');
        $(this).find(".sub-menu").show(1000);
    });

    second.on('mouseout', function(){
        $(this).find(".sub-menu").hide(2000);
    });

    third.on('mouseenter', function(){
        console.log(this);
        $(this).find(".sub-menu").show(1000);
    });
    third.on('mouseout', function(){
        console.log(this);
        $(this).find(".sub-menu").hide(2000);
    });

    $(".box.box12").on('mouseenter', function(){
        $(this).find(".title, .underline").hide();
    });
    $(".box.box12").on('mouseout', function(){
        $(this).find(".title, .underline").show();
    });
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true
    });

    var nameSelect=$('#nameSelect');
    var nameDisplay=$('#nameDisplay');

    nameSelect.on('change',function(){
            nameDisplay.text(nameSelect.val());
    });
    var nameSelect2=$('#nameSelect2');
    var nameDisplay2=$('#nameDisplay2');

    nameSelect2.on('change',function(){
        nameDisplay2.text(nameSelect2.val());
    });
    var nameSelect3=$('#nameSelect3');
    var nameDisplay3=$('#nameDisplay3');

    nameSelect3.on('change',function(){
        nameDisplay3.text(nameSelect3.val());
    });


});