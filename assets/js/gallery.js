(() => {
  const photos = Array.from(document.querySelectorAll('[data-gallery-photo]'));
  const viewer = document.getElementById('gallery-viewer');
  if (!photos.length || !viewer || typeof viewer.showModal !== 'function') return;

  const image = document.getElementById('gallery-viewer-image');
  const caption = document.getElementById('gallery-viewer-caption');
  const counter = document.getElementById('gallery-viewer-counter');
  let current = 0;

  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    const photo = photos[current];
    image.src = photo.href;
    image.alt = photo.dataset.alt;
    caption.textContent = photo.dataset.caption;
    counter.textContent = `${current + 1} / ${photos.length}`;
  }

  photos.forEach((photo, index) => {
    photo.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      showPhoto(index);
      viewer.showModal();
      document.body.classList.add('gallery-viewer-open');
    });
  });

  document.getElementById('gallery-viewer-close').addEventListener('click', () => viewer.close());
  document.getElementById('gallery-viewer-previous').addEventListener('click', () => showPhoto(current - 1));
  document.getElementById('gallery-viewer-next').addEventListener('click', () => showPhoto(current + 1));

  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });

  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });

  viewer.addEventListener('close', () => {
    document.body.classList.remove('gallery-viewer-open');
    image.removeAttribute('src');
  });
})();
