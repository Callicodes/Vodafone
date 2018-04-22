$('#finish1').on('click', function() {
  $('.thumbnail .back').attr('src', 'images/back.png')
  $('.thumbnail .front').attr('src', 'images/img3.png')
})
$('#finish2').on('click', function() {
  $('.thumbnail .back').attr('src', 'images/back.png')
  $('.thumbnail .front').attr('src', 'images/img2.png')
})

$('#finish3').on('click', function() {
  $('.thumbnail .back').attr('src', 'images/back.png')
  $('.thumbnail .front').attr('src', 'images/img1.png')
})

$('#64-radio').click(function() {
  $('#price').text('£1,149.00')
})

$('#64-radio').click(function() {
  $('#price2').text('£43.20')
})

$('#256-radio').click(function() {
  $('#price').text('£1,149.00')
})

$('#256-radio').click(function() {
  $('#price2').text('£43.20')
})

$('img').on('mouseover', function() {
  $('.front').css('left', '-100px')
  $('.back').css('margin-left', '30px')
  $('.back').css('margin-right', '-40px')
})

$('img').on('mouseout', function() {
  $('.front').css('left', '-130px')
  $('.back').css('margin-left', '60px')
  $('.back').css('margin-right', '-70px')
})

$('img').click(function() {
  $('.hint').css('opacity', '0')
  $('img').css('opacity', '0')
  setTimeout(function() {
    let a = $('.front').attr('src')
    $('.front').attr('src', $('.back').attr('src'))
    $('.back').attr('src', a);
    $('img').css('opacity', '1')
  }, 300)
})

  /*
var url = 'phones.json';
var data = {

    firstName: "Dave",
    lastName: "Mcfarland"

};

var callback = ;
$.get('phones.json' {



}, function (response) {

  //do something with the data
}



)

*/