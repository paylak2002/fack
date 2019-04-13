function func(param){
	$(document).ready(()=>{
		$('.pup').css('display','block')
		$('.window>center>iframe').attr('src',param.children[2].innerHTML)
		$('.window>center>iframe').css('height','400px')
	})
}
window.ondblclick = ()=>{
	$('.pup').css('display','none')
}
window.onload = ()=>{
	// Initial state
	var scrollPos = 0
	height = 500
	// adding scroll event
	$(document).ready(()=>{
		console.log($(window).width())
		console.log(screen.width)
		$('#menu').css('width','100%')
		setInterval(()=>{
			$('#menu>ul>li').css('width',$('#menu').width()*10/100 + 'px')
			$('#menu>ul>li').css('font-size',$('#menu').width()*1.5/100 + 'px')
		},100)
		$('#home').click(()=>{
			var k = 0;
			if(window.scrollY > $('header').height() + 100)
			{
				var inter = setInterval(()=>{
					if(window.scrollY < $('header').height() + 100)
					{
						clearInterval(inter)
						window.scrollTo(0,$('header').height() + 10)
					}
					else{
						k++
						window.scrollTo(0,window.scrollY - k)
					}
				},10)
			}
		})
		$('#kyanq').click(()=>{
			var k = 0;
			if(window.scrollY > $('header').height() + 100)
			{
				k = 0
				var inter = setInterval(()=>{
					if(window.scrollY < $('header').height() + 100)
					{
						clearInterval(inter)
						window.scrollTo(0,$('header').height() + 10)
					}
					else{
						k++
						window.scrollTo(0,window.scrollY - k)
					}
				},10)
			}
		})
		$('#erger').click(()=>{
			var k = 0;
			if(window.scrollY > $('header').height() + $('.k').height() + 100)
			{
				k = 0
				var inter = setInterval(()=>{
					if(window.scrollY < $('header').height() + $('.k').height() + 100)
					{
						clearInterval(inter)
						window.scrollTo(0,$('header').height() + $('.k').height() + 100)
					}
					else{
						k++
						window.scrollTo(0,window.scrollY - k)
					}
				},10)
			}
			else{
				k = 0
				var inter = setInterval(()=>{
					if(window.scrollY > $('header').height() + $('.k').height() + 100)
					{
						clearInterval(inter)
						window.scrollTo(0,$('header').height() + $('.k').height() + 100)
					}
					else{
						k++
						window.scrollTo(0,window.scrollY + k)
					}
				},10)
			}
		})
		$('#mtqer').click(()=>{
			var k = 0;
			if(window.scrollY > $('header').height() + $('.k').height() + $('.e').height() + 160)
			{
				k = 0
				var inter = setInterval(()=>{
					if(window.scrollY < $('header').height() + $('.k').height() + $('.e').height() + 160)
					{
						clearInterval(inter)
						window.scrollTo(0,$('header').height() + $('.k').height() + $('.e').height() + 160)
					}
					else{
						k++
						window.scrollTo(0,window.scrollY - k)
					}
				},10)
			}
			else{
				k = 0
				var inter = setInterval(()=>{
					if(window.scrollY > $('header').height() + $('.k').height() + $('.e').height() + 160)
					{
						clearInterval(inter)
						window.scrollTo(0,$('header').height() + $('.k').height() + $('.e').height() + 160)
					}
					else{
						k++
						window.scrollTo(0,window.scrollY + k)
					}
				},10)
			}
		})
		/*$('#nkarner').click(()=>{
			var k = 0;
			if(window.scrollY > $('header').height() + $('.k').height() + $('.e').height() + $('.m').height() + 240)
			{
				k = 0
				var inter = setInterval(()=>{
					if(window.scrollY < $('header').height() + $('.k').height() + $('.e').height() + $('.m').height() + 240)
					{
						clearInterval(inter)
						window.scrollTo(0,$('header').height() + $('.k').height() + $('.e').height() + $('.m').height() + 240)
					}
					else{
						k++
						window.scrollTo(0,window.scrollY - k)
					}
				},10)
			}
			else{
				k = 0
				var inter = setInterval(()=>{
					if(window.scrollY > $('header').height() + $('.k').height() + $('.e').height() + $('.m').height() + 240)
					{
						clearInterval(inter)
						window.scrollTo(0,$('header').height() + $('.k').height() + $('.e').height() + $('.m').height() + 240)
					}
					else{
						k++
						window.scrollTo(0,window.scrollY + k)
					}
				},10)
			}
		})*/
		window.addEventListener('scroll', ()=>{
			var scroll = document.documentElement.scrollTop
			if(scroll >= $('header').height())
			{
				$('#menu').css('display','block')
			}
			else{
				$('#menu').css('display','none')
			}
		})
	})
}
