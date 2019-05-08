let translateX = 0
function right(){
	let leftBtn = document.getElementById('left')
	let rightBtn = document.getElementById('right')
	translateX-=1000
	slider.style.transform = "translate("+ translateX +"px,0)"
	slider.style.transition = "1s"
	if(translateX >= 0)
	{
		leftBtn.style.display = "none"
	}
	else{
		leftBtn.style.display = 'block'
	}
	if(translateX <= -2000)
	{
		rightBtn.style.display = "none"
	}
	else{
		rightBtn.style.display = 'block'
	}
}
function left(){
	let leftBtn = document.getElementById('left')
	let rightBtn = document.getElementById('right')
	translateX+=1000
	slider.style.transform = "translate("+ translateX +"px,0)"
	slider.style.transition = "1s"
	if(translateX >= 0)
	{
		leftBtn.style.display = "none"
	}
	else{
		leftBtn.style.display = 'block'
	}
	if(translateX <= -2000)
	{
		rightBtn.style.display = "none"
	}
	else{
		rightBtn.style.display = 'block'
	}
}
document.onkeyup = (e)=>{
	let key = e.keyCode
	let slider = document.getElementById('slider')
	if(key == 39 && translateX > -2000)
	{
		right()
	}
	else if(key == 37 && translateX < 0)
	{
		left()
	}
}
$(document).ready(()=>{
	let pup = document.getElementById('image')
	let arr = $("#slider>div>div").children()
	let leftBtn = document.getElementById('left')
	let rightBtn = document.getElementById('right')
	if(translateX >= 0)
	{
		leftBtn.style.display = "none"
	}
	else{
		leftBtn.style.display = 'block'
	}
	if(translateX <= -2000)
	{
		rightBtn.style.display = "none"
	}
	else{
		rightBtn.style.display = 'block'
	}
	for(var i = 0;i<arr.length;i++)
	{
		arr[i].onclick = (e)=>{
			let elem = e.path[0]
			document.getElementById('pup').style.display = "block"
			pup.style.backgroundImage = elem.style.backgroundImage
			document.getElementById('container').style.filter = "blur(10px)"
			leftBtn.style.display = 'none'
			rightBtn.style.display = 'none'
		}
	}
	let cl = document.getElementById('close')
	cl.onclick = ()=>{
		document.getElementById('container').style.filter = "blur(0px)"
		document.getElementById('pup').style.display = "none"
		if(translateX >= 0)
		{
			leftBtn.style.display = "none"
		}
		else{
			leftBtn.style.display = 'block'
		}
		if(translateX <= -2000)
		{
			rightBtn.style.display = "none"
		}
		else{
			rightBtn.style.display = 'block'
		}
	}
	leftBtn.onmouseup = ()=>{
		if(translateX < 0)
		{
			left()
		}
	}
	rightBtn.onmouseup = ()=>{
		if(translateX > -2000)
		{
			right()
		}
	}
})