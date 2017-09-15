
import '../style/swiper.min.css'
import '../style/animate.css'
import '../style/index.less'

import './zepto.js'
import './PxLoader.js'
import './swiper.min.js'

var Z = Zepto;

// pre load
const picArr = [
	require('../images/page-bg1.png'),
	require('../images/page-bg2.png'),
	require('../images/title-bg.png'),
	require('../images/bicycle.png'),
	require('../images/ballon.png'),
	require('../images/arrow.png'),
	require('../images/photo/bride.jpg'),
	require('../images/photo/croom.jpg'),
	require('../images/nine/1.jpg'),
	require('../images/nine/2.jpg'),
	require('../images/nine/3.jpg'),
	require('../images/nine/4.jpg'),
	require('../images/nine/5.jpg'),
	require('../images/nine/6.jpg'),
	require('../images/nine/7.jpg'),
	require('../images/nine/8.jpg'),
	require('../images/nine/9.jpg'),
	require('../images/page1/body.png'),
	require('../images/page1/date.png'),
	require('../images/page1/flower-bottom1.png'),
	require('../images/page1/flower-left2.png'),
	require('../images/page1/flower-right1.png'),
	require('../images/page1/flower-top1.png'),
	require('../images/page1/flower-top2.png'),
	require('../images/page1/flower-top3.png'),
	require('../images/page1/flower-top4.png'),
	require('../images/page1/flower-top5.png'),
	require('../images/page1/flower-top6.png'),
	require('../images/page1/flower.png'),
	require('../images/page1/leaf-bottom1.png'),
	require('../images/page1/leaf-bottom2.png'),
	require('../images/page1/leaf-bottom3.png'),
	require('../images/page1/leaf-bottom4.png'),
	require('../images/page1/leaf-bottom5.png'),
	require('../images/page1/leaf-left1.png'),
	require('../images/page1/leaf-left2.png'),
	require('../images/page1/leaf-left3.png'),
	require('../images/page1/leaf-left4.png'),
	require('../images/page1/leaf-left5.png'),
	require('../images/page1/leaf-right1.png'),
	require('../images/page1/leaf-right2.png'),
	require('../images/page1/leaf-right3.png'),
	require('../images/page1/leaf-right4.png'),
	require('../images/page1/leaf-right5.png'),
	require('../images/page1/leaf-top.png'),
	require('../images/page1/name.png'),
	require('../images/page1/text-leaf1.png'),
	require('../images/page1/text-leaf2.png'),
	require('../images/page1/wedding-text.png'),
]
var loader = new window.PxLoader();

picArr.map(pic => {
	loader.addImage(pic)
})

loader.addImage("http://res3.maka.im/user/2443287/music/ef63ea952ceb6418908fb521c0a4f6b1.mp3");
loader.addProgressListener(function (e) {
	var percent = Math.round((e.completedCount / e.totalCount) * 100);
	// console.log(percent)
	Z("#percent").html(percent);
});
loader.addCompletionListener(function () {
	Z('#start').show()
});
loader.start();

function init() {
	var pages = Z('.page');
	var arrow = Z('#arrow');

	new Swiper('#pages', {
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

			if (swiper.activeIndex == 4) {
				photoSwiper.startAutoplay()
			} else {
				photoSwiper.stopAutoplay()
			}

			if (swiper.activeIndex == 5) {
				arrow.hide();
			} else {
				arrow.show();
			}
		},
		onSlideChangeEnd: (swiper) => {
			console.log('end', swiper)
		}
	})

	pages.eq(0).find('.animated').css({
		display: 'block'
	})

	const photoSwiper = new Swiper('#photos',{
		loop: true,
		autoplay: 2000,
		speed: 1000,
		effect : 'coverflow',
		slidesPerView: 1.4,
		centeredSlides: true,
		coverflow: {
			rotate: 30,
			stretch: 10,
			depth: 60,
			modifier: 2,
			slideShadows : false
		}
	})

	photoSwiper.stopAutoplay()
}

Z('#start').click(() => {
	document.getElementById("bgmedia").play()
	Z('.loading').hide()
	init()
})

// 获取传参
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
}

if(getUrlParam('location') == 'hubei') {
	const datePic = require('../images/page1/date2.png')
	const locPic = require('../images/invatation2-2.png')
	const invPic = require('../images/invatation1-2.png')

	Z('#date').css({
		'background-image': 'url('+datePic+')'
	})

	Z('#loc').css({
		'background-image': 'url('+locPic+')'
	})

	Z('#inv').css({
		'background-image': 'url('+invPic+')'
	})
}

