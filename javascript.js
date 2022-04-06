
  var loader = document.getElementById('loader');
  var body = document.querySelectorAll('body');
//   var body = document.getElementsByTagName("BODY")[0];
body[0].style.overflow = 'hidden';
 var navbar = document.querySelectorAll("#nava");
 navbar[0].style.display = 'none';
 
  window.addEventListener('load', function(){
      setTimeout(function(){ 
        loader.style.display = 'none';
        navbar[0].style.display = 'block';
        body[0].style.overflow = 'visible';
       }, 3000);
      loader.style.display = 'block';
  });
