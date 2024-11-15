// Muestra la pantalla de carga y desactiva el scroll
function showLoader() {
    document.getElementById("carga").style.display = "flex";
    document.body.style.overflow = "hidden";
}

// Oculta la pantalla de carga y reactiva el scroll
function hideLoader() {
    document.getElementById("carga").style.display = "none";
    document.body.style.overflow = "auto";
}

// Muestra la pantalla de carga al iniciar la página
document.addEventListener("DOMContentLoaded", showLoader);

// Oculta la pantalla de carga cuando todo el contenido esté completamente cargado
window.addEventListener("load", hideLoader);

setTimeout(hideLoader, 6000); // Oculta el loader después de 3 segundos


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });