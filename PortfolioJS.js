 // add class navbarDark on navbar scroll
 const header = document.querySelector('.navbar');

 window.onscroll = function() {
     var top = window.scrollY;
     if(top >=100) {
         header.classList.add('navbarDark');
     }
     else {
         header.classList.remove('navbarDark');
     }
 }

 // When the user clicks on <div>, open the popup
 function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

