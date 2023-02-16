const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeBtn = document.querySelector('.close-btn');

gallery.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    lightboxImg.src = event.target.src;
    lightbox.style.display = 'flex';
  }
});

closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});