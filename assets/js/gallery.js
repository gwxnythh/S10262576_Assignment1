/* 
  #gallery open & close img
*/
// add a click event listener to each image within the 'gallery' class
document.querySelectorAll('.gallery img').forEach(image => {
  // set the onclick function for each image
  image.onclick = () => {
      // display the popup image container
      document.querySelector('.popup-img').style.display = 'block';
      // set the source of the popup image to the clicked image source
      document.querySelector('.popup-img img').src = image.getAttribute('src');
  }
});

// add a click event listener to the 'span' element within the 'popup-img' class
document.querySelector('.popup-img span').onclick = () => {
  // hide the popup image container when the 'span' is clicked
  document.querySelector('.popup-img').style.display = 'none';
}