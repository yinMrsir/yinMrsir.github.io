$(function () {
  var navList = $('#nav-list');

  $('#nav-move-icon').click(function () {
    if (navList.hasClass('active')) {
      navList.removeClass('active')
    } else {
      navList.addClass('active')
    }
  })

});
