/*  Make navbar fixed after scrolling down  */

var bannerHeight = $("#banner").outerHeight(true);
var navbarHeight = $(".navbar").outerHeight(true);

$(window).scroll(function () {
	if ($(window).scrollTop() > bannerHeight) {
      $(".navbar").addClass("navbar-fixed-top");
      $(".about").css("margin-top", navbarHeight);
      $(".navbar").css("box-shadow", "0 4px 5px -1px #c6c6c6");
    }
    if ($(window).scrollTop() < bannerHeight) {
      $(".navbar").removeClass("navbar-fixed-top");
      $(".about").css("margin-top", "0");
      $(".navbar").css("box-shadow", "none");
    }
  });

$("nav").find("li").on("click", "a", function () {
  $('.navbar-collapse.in').collapse('hide');
});

/* Send form to my email */

var messageForm = "";

$("#sendMessage").on("click", function(){
  messageForm = $("#contact-form").serialize();
  $.ajax({
    url: "//formspree.io/contact@valeriaoshiro.com", 
    method: "POST",
    data: { message: messageForm },
    dataType: "json"
  });
  alert("Thank you for the email. We'll be in touch promptly.");
  return false;
});