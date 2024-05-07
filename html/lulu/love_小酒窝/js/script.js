

function fireworks() {
	$('.page_one').addClass('hide');
	$('.page_two').removeClass('hide');
	$('.page_two').fireworks({
		sound: true,
		opacity: 0.9,
		width: '100%',
		height: '100%'
	});
}
fireworks();