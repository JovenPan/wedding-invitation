var Z = Zepto;
var pages = Z('.page');

new Swiper('.swiper-container', {
	direction: 'vertical',
	effect : 'fade',
	onSlideChangeStart: (swiper) => {
		pages.css({
			opacity: 0
		})

		pages.eq(swiper.activeIndex).css({
			opacity: 1
		})

		pages.find('.animated').css({
			display: 'none'
		})

		pages.eq(swiper.activeIndex).find('.animated').css({
			display: 'block'
		})
	}
})

pages.eq(0).find('.animated').css({
	display: 'block'
})

/*var Zoom = {
	fadeInLeft: function(className, distance, duration, delay) {
		var delay = delay || '0';

		var node = document.createElement('style'),
			animationName = className + '-fadeInLeft',
			str = '.swiper-slide-active .' + className + '.fadeInLeft { animation-name: ' + animationName + '; animation-duration: ' + duration + 's; animation-delay: ' + delay+ 's; animation-fill-mode: forwards;} @keyframes ' + animationName + ' { from { opacity: 0; transform: translate3d(-'+ distance +', 0, 0); } to { opacity: 1; transform: none; } }';

		node.innerHTML = str;

		document.getElementsByTagName('head')[0].appendChild(node);

		Z('.'+className).addClass('fadeInLeft');
	},
	fadeInRight: function(className, distance, duration, delay) {
		var delay = delay || '0';

		var node = document.createElement('style'),
			animationName = className + '-fadeInRight',
			str = '.swiper-slide-active .' + className + '.fadeInRight { animation-name: ' + animationName + '; animation-duration: ' + duration + 's;animation-delay: ' + delay+ 's; animation-fill-mode: forwards;} @keyframes ' + animationName + ' { from { opacity: 0; transform: translate3d('+ distance +', 0, 0); } to { opacity: 1; transform: none; } }';

		node.innerHTML = str;

		document.getElementsByTagName('head')[0].appendChild(node);

		Z('.'+className).addClass('fadeInRight');
	}
}

Zoom.fadeInLeft('blue', '0.1rem', '0.5');
Zoom.fadeInRight('red', '0.1rem', '0.5');

Zoom.fadeInLeft('bg01', '0.2rem', '0.8');
Zoom.fadeInLeft('boy', '0.3rem', '0.8', '0.5');
Zoom.fadeInLeft('dog', '0.3rem', '0.8', '0.5');

Zoom.fadeInRight('bg02', '0.2rem', '0.8');
Zoom.fadeInRight('girl', '0.3rem', '0.8', '0.5');*/