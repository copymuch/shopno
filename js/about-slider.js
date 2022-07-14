function Sim(sldrId) {
	let id = document.getElementById(sldrId);
	if (id) {
		this.sldrRoot = id

	}
	else {
		this.sldrRoot = document.querySelector ('.about_section_img')
	};
}