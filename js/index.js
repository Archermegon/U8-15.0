


$('.logo>ul>li>a').click(function () {
  $(this).parent().siblings().find('a').removeClass('active')
  $(this).addClass('active')
  var index = $(this).parent().index()
  var h = $(".view>div").eq(index).offset().top - 110
  $('body,html').stop().animate({ 'scrollTop': h }, 1000)
})

var h1 = $(".view>div").eq(0).offset().top - 120
var h2 = $(".view>div").eq(1).offset().top - 120
var h3 = $(".view>div").eq(2).offset().top - 120
var h4 = $(".view>div").eq(3).offset().top - 120
var h5 = $(".view>div").eq(4).offset().top - 120
var h6 = $(".view>div").eq(5).offset().top - 120
var h7 = $(".view>div").eq(6).offset().top - 120

$(window).scroll(function (){
  var num = $(window).scrollTop() 
  var i 

  if (num > h7) {
    i = 6
  }else if (num > h6) {
    i = 5
  }else if(num > h5){
    i = 4
  } else if (num > h4) {
    i = 3
  } else if (num > h3) {
    i = 2
  } else if (num > h2) {
    i = 1
  } else if (num > h1) {
    i = 0
  }
  $('.logo>ul>li>a').removeClass('active')
  $('.logo>ul>li>a').eq(i).addClass('active')
})









