<!-- FILE: script.js -->
// Small JS helpers: mobile menu toggle, image preview hookups, active link highlighting.
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    // mobile menu
    var btn = document.querySelector('.menu-btn');
    var nav = document.querySelector('.site-nav');
    if(btn){
      btn.addEventListener('click', function(){
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      });
    }

    // image preview function
    function makePreview(inputId, previewId){
      var input = document.getElementById(inputId);
      var preview = document.getElementById(previewId);
      if(!input || !preview) return;
      input.addEventListener('change', function(e){
        var file = e.target.files[0];
        if(!file) return;
        var reader = new FileReader();
        reader.onload = function(ev){
          preview.innerHTML = '';
          var img = document.createElement('img');
          img.src = ev.target.result;
          img.className = 'preview';
          preview.appendChild(img);
        }
        reader.readAsDataURL(file);
      });
    }

    makePreview('online-img-input','online-img-preview');
    makePreview('referee-img-input','referee-img-preview');
    makePreview('soccer-img-input','soccer-img-preview');
    makePreview('horn-img-input','horn-img-preview');
    makePreview('piano-img-input','piano-img-preview');

    // active nav highlight based on url
    var links = document.querySelectorAll('.site-nav .nav-link');
    links.forEach(function(a){
      if(a.getAttribute('href') === location.pathname.split('/').pop() || (a.getAttribute('href') === 'index.html' && location.pathname.split('/').pop()==='')){
        a.classList.add('active');
      }
    });
  });
