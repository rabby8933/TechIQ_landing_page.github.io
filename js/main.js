//Owl Carousal
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

//Wow js
  new WOW().init();
