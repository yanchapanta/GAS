setTimeout(() => {
	;(() => {
		const offArrow = document.getElementById('offArrow')
		const offArrowoffBtnTopClose = document.querySelector('#offBtnTopClose')

		offArrow.addEventListener('click', (e) => {
			e.preventDefault
			offArrowoffBtnTopClose.classList.toggle('offBtnTopClose')
		})
	})()
	;(() => {
		const idCategoria = document.querySelector('#idCategoria')
		console.log('idCategoria', idCategoria)
		const btnCategoria = document.querySelector('#btnCategoria')
		btnCategoria.addEventListener('click', (e) => {
			e.preventDefault
			btnCategoria.classList.toggle('show-traslation-boton')
			idCategoria.classList.toggle('show-traslation')
		})
	})()
	/* ********** ContactForm ********** */
	;((d) => {
		const $form = d.querySelector('.contact-form'),
			$loader = d.querySelector('.contact-form-loader'),
			$response = d.querySelector('.contact-form-response')

		$form.addEventListener('submit', (e) => {
			e.preventDefault()
			$loader.classList.remove('none')
			fetch('https://formsubmit.co/ajax/abcestrategia@gmail.com', {
				method: 'POST',
				body: new FormData(e.target),
			})
				.then((res) => (res.ok ? res.json() : Promise.reject(res)))
				.then((json) => {
					console.log(json)
					location.hash = '#gracias'
					$form.reset()
				})
				.catch((err) => {
					console.log(err)
					let message =
						err.statusText || 'Ocurrió un error al enviar, intenta nuevamente'
					$response.querySelector(
						'h3'
					).innerHTML = `Error ${err.status}: ${message}`
				})
				.finally(() => {
					$loader.classList.add('none')
					setTimeout(() => {
						location.hash = '#close'
					}, 3000)
				})
		})
	})(document)
}, 300)
