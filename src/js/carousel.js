$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container', {
    width: 400,
    direction: 'horizontal',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    loop: true,
  })

  if ($('.swiper-container .swiper-slide').length <= 3) {
    mySwiper.destroy()
    $('.swiper-pagination').hide()
  }
})
