// #per product img
function img(anything) {
    document.querySelector('.slide').src = anything;
  }
  
  function change(change) {
    const line = document.querySelector('.home');
    line.style.background = change;
  }
  
  // #quantity button
  const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");
  
  let a = 1;
  
  plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? a : 10; // Limit the quantity to 10
    num.innerText = (a < 10) ? "0" + a : a.toString();
  });
  
  minus.addEventListener("click", () => {
    if (a > 1) {
      a--;
      num.innerText = (a < 10) ? "0" + a : a.toString();
    }
  });
  
  
  // #versions selector
  const colorSelector = document.getElementById('colorSelector');
  const productImage = document.querySelector('.main-image img');
  
  colorSelector.addEventListener('click', function (event) {
    if (event.target.tagName === 'SPAN') {
      const imgSrc = event.target.getAttribute('data-img');
  
      productImage.src = imgSrc;
    }
  });