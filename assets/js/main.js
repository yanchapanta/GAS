;(() => {
	const offArrow = document.getElementById('offArrow')
	const offArrowoffBtnTopClose = document.querySelector('#offBtnTopClose')
	console.log('offArrow0' + offArrowoffBtnTopClose)

	offArrow.addEventListener('click', (e) => {
		console.log(offArrow)
		console.log('offArrow0')
		e.preventDefault
		console.log('offArrow0', offArrow)
		offArrowoffBtnTopClose.classList.toggle('offBtnTopClose')
	})
})()
;(() => {
	const idCategoria = document.querySelector('#idCategoria')
	const btnCategoria = document.querySelector('#btnCategoria')

	btnCategoria.addEventListener('click', () => {
		btnCategoria.classList.toggle('show-traslation-boton')
		idCategoria.classList.toggle('show-traslation')
	})
})()
