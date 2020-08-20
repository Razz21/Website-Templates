//main.js file

document.addEventListener("DOMContentLoaded", function () {
  var elms = document.getElementsByClassName("splide");
  for (var i = 0, len = elms.length; i < len; i++) {
    new Splide(elms[i], {
      type: "loop",
      perPage: 2,
      gap: "4rem",
      focus: "center",
      autoplay: true,
      padding: {
        right: "5rem",
        left: "5rem",
      },
      heightRatio: 0.3,

      // cover: true,
      // autoWidth: true,
      lazyLoad: "nearby",
      // height: "20rem",
      breakpoints: {
        "640": {
          perPage: 1,
          gap: "2rem",
          height: "10rem",
        },
        "768": {
          perPage: 2,
          gap: "2.5rem",
          height: "12rem",
        },
      },
    }).mount();
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const content = document.querySelector(".site-content-wrap");
  menuToggle.addEventListener("click", () => {
    content.classList.toggle("active");
  });
});
