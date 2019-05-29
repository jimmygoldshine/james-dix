(function () {
   var burgerIcon = document.getElementById('burger-icon');
   var burgerMenu = document.getElementById('burger-menu');
   burgerIcon.onclick = function() {
     if (burgerIcon.classList.contains('cross')) {
       burgerIcon.classList.remove('cross');
       burgerIcon.classList.add('flat');
       burgerMenu.classList.remove('expanded');
       burgerMenu.classList.add('collapsed');
     } else {
       burgerIcon.classList.remove('flat');
       burgerIcon.classList.add('cross');
       burgerMenu.classList.remove('collapsed');
       burgerMenu.classList.add('expanded');
     }
   }
})();
