const el = document.querySelectorAll('.link');

// TAB
for (let i = 0; i < el.length; i++) {
	el[i].addEventListener('mouseover', function () {
		const fill = this.getAttribute('data-logo-fill');
		const logo = document.getElementById('logo');
		logo.setAttribute('fill', String(fill));
	}, false);
	el[i].addEventListener('mouseout', function () {
		const logo = document.getElementById('logo');
		logo.setAttribute('fill', '#212121');
	}, false);
}
