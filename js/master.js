const el = document.querySelectorAll('.link');

// TAB
for (let i = 0; i < el.length; i++) {
	el[i].addEventListener('mouseover', function () {
		const fill = this.getAttribute('data-logo-fill');
		const header = document.getElementById('header');
		header.style.backgroundColor = String(fill);
		console.log(fill);
	}, false);
	el[i].addEventListener('mouseout', function () {
		const header = document.getElementById('header');
		header.style.backgroundColor = '#2962FF';
	}, false);
}
