function resetScreenSize () {

	let init = ()=> {

		let _el = document.getElementById('app');
		let hScale = window.innerHeight / 1080;
		let wScale = window.innerWidth  / 1920;
		console.log(window.innerHeight, window.innerWidth)

		_el.style.transform = 'scaleX(' + wScale +') scaleY(' + hScale + ')'
	}

	let lazyFun;

	window.onresize = ()=> {

		clearTimeout(lazyFun);

		lazyFun = setTimeout(()=> {

			init()

		}, 600)
	}

	init()
}

export default resetScreenSize;