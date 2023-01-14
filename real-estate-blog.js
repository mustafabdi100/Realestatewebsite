window.onload = function() {
    var postImages = document.querySelectorAll('.post img');
    postImages.forEach(function(img) {
      img.addEventListener('click', function() {
        img.classList.add('zoomed');
      });
    });
  }