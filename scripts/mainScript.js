$(document).ready(function () {

  $('#nav-menu > li').on('click',function() {
    var id = $(this > 'a').attr('href');
    $(this).siblings().removeClass('active'); 
    $(this).addClass('active');
    // $($(this > 'a').attr('href')[0]).siblings().removeClass('active in');
    $(id[0]).addClass('active in');
  });






})