$(".pizza1").hover(function(){
  $(this).css(
  {"width": "400px", "height": "400px", "background-image": "url('img/pizza2.png')", "background-position": "center", "margin-left": "75px", "bottom": "40px"}
  );
  }, function(){
  $(this).css(
  {"width": "380px", "height": "380px", "margin-left": "90px", "background-image": "url('img/pizza1.png')", "bottom": "50px"}
  );
});
$(".pizza2").hover(function(){
  $(this).css(
  {"width": "400px", "height": "400px", "background-image": "url('img/pizza4.png')", "background-position": "center", "margin-left": "75px", "bottom": "40px"}
  );
  }, function(){
  $(this).css(
  {"width": "380px", "height": "380px", "margin-left": "90px", "background-image": "url('img/pizza3.png')", "bottom": "50px"}
  );
});