$(document).ready(function () {
  function setActiveNavLink() {
    var hash = window.location.hash;
    $('.nav-link').removeClass('active');
    if (hash && hash !== '#') {
      $('.nav-link[href="' + hash + '"]').addClass('active');
    } else {
      $('.nav-link[href="#"]').addClass('active');
    }
  }

  $('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });

  $(window).on('hashchange', function () {
    setActiveNavLink();
  });

  setActiveNavLink();
});