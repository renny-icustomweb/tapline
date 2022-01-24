AOS.init();

// Start marquee
$('.marquee_text').marquee({
    direction: 'left',
    duration: 20000,
    gap: 20,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true
});
$('.marquee_image').marquee({
    direction: 'left',
    duration: 20000,
    gap: 40,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true
});


/* matchheight */


if ($(window).width() > 767) {

$('.matchheight1').matchHeight();

 var array = $(".service_box_inner");
        var height = 0;
        for(i = 0; i < array.length; i++){
            if($(array[i]).height() > height){
                height = $(array[i]).height();
            }
        }

          $(array).height(height);

           var array1 = $(".inverstor_content");
        var height1 = 0;
        for(i = 0; i < array1.length; i++){
            if($(array1[i]).height() > height1){
                height1 = $(array1[i]).height();
            }
        }
          $(array1).height(height1);

}

 





/* mobile menu */


$(document).ready(function() {
   
   $(".mkdf-side-menu-button-opener").click(function(){
      $('body').addClass('mkdf-side-menu-slide-from-right mkdf-right-side-menu-opened')
    });
   
   $(".mkdf-close-side-menu").click(function(){
      $('body').removeClass('mkdf-side-menu-slide-from-right mkdf-right-side-menu-opened')
    });




/* scroll down */

$(".scrolldown").click(function() {
    $('html,body').animate({
        scrollTop: $(".conencting_student").offset().top},
        'slow');
});



   
 });


  //paste this code under head tag or in a seperate js file.
  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".loader").fadeOut("slow");


    /* viewport */


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

      window.addEventListener('resize', () => { 
  document.querySelector(':root').style
    .setProperty('--vh', window.innerHeight/100 + 'px');
})
  });














