window.onload = ()=>{
	let element = document.getElementById('cont')
	let btn = document.getElementById('btn')
	let img = document.getElementById('img')
	element.onmouseenter = ()=>{
		btn.style.opacity = "1"
		btn.style.color = "white"
		img.style.filter = "blur(10px)"
		btn.style.transition = "1s"
	}
	element.onmouseleave = ()=>{
		btn.style.opacity = "0.5"
		btn.style.color = "yellow"
		img.style.filter = "blur(0px)"
		btn.style.transition = "1s"
	}
}