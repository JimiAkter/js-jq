$(document).ready(function(){

   // alert
   $('#btnc').click(function(){
    alert('hello')

   });



   //hide
   $('#hide').click(function(){
     $('h2').hide("slow");
   });
   //

   //show
   $('#show').click(function(){
     $('h2').show("fast");
   });
   //
   //toggle
   $('#toggle').click(function(){
    $('h2').toggle(4000);
  });
 //


   //fadeout
   $('.hide').click(function(){
     $('h3').fadeOut(1000);
   });
   //

   //fadein
   $('.show').click(function(){
     $('h3').fadeIn(2000);
   });
   //
   //toggle
   $('.toggle').click(function(){
    $('h3').fadeToggle(4000);
  });
 //
   //to
   $('#fto').click(function(){
    $('h3').fadeTo(2000, 0.3);
  });
 //


 //slidetoggle
  $('.panel').click(function(){
    $('.content').slideToggle(1000);

  });

//draggable

  $('#dragg').draggable();
    //progressbar
    $( "#progressbar" ).progressbar({
      value: 37
    });

//slider
    $( "#slider" ).slider();

   
});

