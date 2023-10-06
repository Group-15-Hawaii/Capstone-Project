const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click",() => {
    menuList.classList.toggle("hidden");
});

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("profile-card");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "flex"; 
  setTimeout(carousel, 4000); 
}


// let d = document;

// function initLinks() {
//   let programLink = d.getElementById('programLink');
//   let fasilitasLink = d.getElementById('fasilitasLink');
//   let biayaLink = d.getElementById('biayaLink');

//   let program = d.getElementById('about');
//   let fasilitas = d.getElementById('');
//   let biaya = d.getElementById('biaya-course');

//   programLink.addEventListener('click', (e) => { scrollTo(program, e) }, false);
//   fasilitasLink.addEventListener('click', (e) => { scrollTo(fasilitas, e) }, false);
//   biayaLink.addEventListener('click', (e) => { scrollTo(biaya, e) }, false);
// }

// function scrollTo(to, callback, duration = 1500) { 
//   //FIXME this always starts from '0', instead of the clicked element offsetTop -> This is because the position is calculated for the main <html> element, not the <iframe>'s <html> tag/*console.log('from:', from); //DEBUG
//   // console.log('from.clientY:', from.clientY); //DEBUG
//   // console.log('from.target.offsetTop:', from.target.offsetTop); //DEBUG
  
//   // console.log('position():', document.documentElement.offsetTop || document.body.parentNode.offsetTop || document.body.offsetTop); //DEBUG
//   // console.log('document.documentElement:', document.documentElement); //DEBUG
//   // console.log('document.body:', document.body); //DEBUG
//   let start;
  
//   if (isMouseEvent(from)) { //FIXME : the scroll starts at the link, not where the screen really is : fix that
//     // start = from.target.offsetTop;
//     start = from.pageY; //FIXME
//   }
//   else {
//     start = from;
//   }
  
//   if (isDomElement(to)) {
//     // console.log('this is an element:', to); //DEBUG
//     to = to.offsetTop;
//   }
//   /*else {
//     // console.log('this is NOT an element:', to); //DEBUG
//   }*/
  
//   // because it's so fucking difficult to detect the scrolling element, just move them all
//   function move(amount) {
//     // document.scrollingElement.scrollTop = amount; //FIXME Test that
//     document.documentElement.scrollTop = amount;
//     document.body.parentNode.scrollTop = amount;
//     document.body.scrollTop = amount;
//   }

//   function position() {
//     return document.documentElement.offsetTop || document.body.parentNode.offsetTop || document.body.offsetTop;
//   }
  
//   var start = position(),
//     change = to - start,
//     currentTime = 0,
//     increment = 20;
//   console.log('start:', start); //DEBUG
//   console.log('to:', to); //DEBUG
//   console.log('change:', change); //DEBUG
  
//   var animateScroll = function() {
//     // increment the time
//     currentTime += increment;
//     // find the value with the quadratic in-out easing function
//     var val = Math.easeInOutQuad(currentTime, start, change, duration);
//     // move the document.body
//     move(val);
//     // do the animation unless its over
//     if (currentTime < duration) {
//       requestAnimFrame(animateScroll);
//     }
//     else {
//       if (callback && typeof(callback) === 'function') {
//         // the animation is done so lets callback
//         callback();
//       }
//     }
//   };
  
//   animateScroll();
// }