$(document).ready(main);

var contador = 1;

function main() {

	$('.menu-mobile-icon').click(function(){

		if(contador==1) {
			$('.navigation').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.navigation').animate({
				left : '-100%'
			});
		}
	});

};