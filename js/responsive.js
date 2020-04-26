/* ----- RESPONSIVE ----- */
const burger_btn = document.getElementById('burger_btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

burger_btn.addEventListener('click', function() {
  sidebar.classList.toggle('sidebar_open');
  burger_btn.classList.toggle('cambio');
  overlay.classList.toggle('overlay_open');
})

overlay.addEventListener('click', function() {
  sidebar.classList.toggle('sidebar_open');
  burger_btn.classList.toggle('cambio');
  overlay.classList.toggle('overlay_open');
})


