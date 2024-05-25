// const bat =  document.querySelector('.bat');
// const cart =  document.querySelector('.cart');
// // const fhx =  document.querySelector('.bat');
// bat.addEventListener("click", function(){

// });
// $(document).ready(function(){
//   $(".bat").click(function(){
//     $(".cart").show()
//   })
// });


$(document).ready(function(){
  $('.fa-cart-shopping').click(function(){
      $('.cart').show()
  });
  $('.fa-times').click(function(){
    $('.cart').hide()
});
});