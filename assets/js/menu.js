;(() => {
	// CONFIG BOTON QUIENES SOMOS
	console.log('INICIANDO CON EL MENU')
	const addComponent = document.getElementById('myContentPrincipal')
	const btnLoadHome = document.getElementById('btnLoadHome')
	const btnLoadAbout = document.getElementById('btnLoadAbout')
	const btnLoadContacts = document.getElementById('btnLoadContacts')
	const btnLoadSoport = document.getElementById('btnLoadSoport')

	const url1 = 'assets/componentes/inicio.html'
	const url2 = 'assets/componentes/quienesSomos.html'
	const url3 = 'assets/componentes/contactos.html'
	const url4 = 'assets/componentes/soporte.html'

	function xmlCallComponent(url) {
		const xhttp = new XMLHttpRequest()
		// console.log('Datos del servidor')
		// console.log(xhttp.readyState)
		xhttp.open('GET', url, true)

		xhttp.addEventListener('load', (e) => {
			// console.log(e.target)
			addComponent.innerHTML = e.target.responseText
		})
		//realize la peticion
		xhttp.send()
	}

	let countChild = addComponent.childElementCount

	if (countChild === 0) {
		console.log('no hay datos')

		xmlCallComponent(url1)
		countChild++
	}
	if (countChild !== 0) {
		console.log('si hay datos')
		console.log('btnLoadHome', btnLoadAbout)

		btnLoadHome.addEventListener('change', (e) => {
			e.preventDefault
			xmlCallComponent(url1)
		})
		btnLoadAbout.addEventListener('change', (e) => {
			e.preventDefault
			xmlCallComponent(url2)
		})
		btnLoadContacts.addEventListener('change', (e) => {
			e.preventDefault
			xmlCallComponent(url3)
		})
		btnLoadSoport.addEventListener('change', (e) => {
			e.preventDefault
			xmlCallComponent(url4)
		})
	}
})()
