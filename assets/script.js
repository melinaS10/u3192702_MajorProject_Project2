//INTERACTIVE ARTWORKS SCRIPT

//Set function for the gallery images
function myFunction(imgs) {
  // Getting the expanded the image
  var expandImg = document.getElementById("expandedImgn");
  // Getting the image text
  var imgText = document.getElementById("imgtextn");
  // Using the same image for both the expanded image and gallery image in the grid
  expandImg.src = imgs.src;
  // Use alt attribute of gallery icon as title inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container, which is hidden in CSS
  expandImg.parentElement.style.display = "block";
}