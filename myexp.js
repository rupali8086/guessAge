//  Slideshow Activity
//  ** SOLUTION **

// TODO: Put links to our images in this image array.
var steps = ["take any one number between 0 to 9","Make it double","Add 5","Multiply with 50",
              "if your birthday done then add 1768 or 1767 ","Minus your birthyear"];
var images = ["step1.jpg", "step2.jpg", "step3.jpg", "step4.jpg","done.jpg","step6.jpg"];


// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;
var next = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  // for(var i = 0 ; i < images.length ; i++) {
 
  
  $("#image-holder").html("<img src=" + images[count] + " width='200px' height='auto'>"); 
  $("#instruction").html("<p>" + steps[next] + "</p>");
  
  // $("#image-holder").html("<img src='age.jpg' width='200px' height='auto'>");}
  console.log(images[count] );
  console.log(steps[next] );
}

function nextImage() {
  //  TODO: Increment the count by 1.
  next++;
  count++; 
 
  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='loading.gif' width='200px' height='200px'/>");
  console.log($("#image-holder").html("<img src='loading.gif' width='200px' height='200px'/>"));
  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 5000);
  

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
    setTimeout(function() {
    alert("Now you got 3 digit number, right ???");
    alert("First digit is your assumed number & last two digit is your age  ");
    stopSlideshow();
  },100);
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  $("#start").hide();
  showImage = setInterval(nextImage, 7000);
}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.
displayImage();