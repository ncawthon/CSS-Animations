$(function() {
var i=0;

// This is array of pauses between each new beaver animation start.
// There can be as many numbers as you want. When the last number is picked, it will start over from the first one.
// Explanation:
// first elevation start without any delays, second elevation start in 3000ms after the first descent finish,
// third animation start in 5000ms after second descent finish,
// ...
// sixth elevation start in 1000ms after fifth descent finish,
// seventh elevation start in 3000ms after sixth descent finish...
var pausesArray = [3000, 5000, 7000, 3000, 1000];

function setupBeaverLoop() {
  $(".beaver-container").bind("animationstart webkitAnimationStart oAnimationStart MSAnimationStart", function(event){
    console.log('start');
    if (event.target.className == 'beaver-container active') {
      $('.beaver-right-wing').addClass('active');
      $('.beaver-left-wing').addClass('active');
    }
  });
  $(".beaver-container").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(event){
    if (event.target.className == 'beaver-container active') {
      console.log('end');
      $('.beaver-right-wing').removeClass('active');
      $('.beaver-left-wing').removeClass('active');
      $(".beaver-container").removeClass('active');

      setTimeout(startBeaverLoop, pausesArray[i]);
      console.log(pausesArray[i]);
      if (i >= pausesArray.length-1) {
        i = 0;
      } else {
        i++;
      }
    }
  });
}

function startBeaverLoop() {
  $(".beaver-container").addClass('active');
  console.log('beaver loop start, ', i);
}

setupBeaverLoop();
startBeaverLoop();

});