const el = document.querySelectorAll('.link');

// TAB
for (let i = 0; i < el.length; i++) {
  el[i].addEventListener('mouseover', () => {
    const fill = this.getAttribute('data-logo-fill');
    const header = document.getElementById('header');
    header.style.backgroundColor = String(fill);
  }, false);
  el[i].addEventListener('mouseout', () => {
    const header = document.getElementById('header');
    header.style.backgroundColor = '#2962FF';
  }, false);
}
