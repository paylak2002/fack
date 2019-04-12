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
			window.scrollTo(0,$('header').height() + 10)
		})
		$('#kyanq').click(()=>{
			window.scrollTo(0,$('header').height() + 10)
		})
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