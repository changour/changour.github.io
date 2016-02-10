$(function () {
	$('#accordion >.panel.panel-default, #innerAcc >.panel.panel-default').on('shown.bs.collapse', function (e) {
		var offset = $('.panel.panel-default > .panel-collapse.in').offset();
		if (offset) {
			$('html,body').animate({
				scrollTop: $(this).offset().top - 50 //tengo que traversTo el elto correcto
			}, 500);
			e.stopPropagation();
		}
	});
});

$(function () {

	//	hace visible el contenido correspondiente a la url

	var hash = window.location.hash;


	hash && $('.cambiaURL[href="' + hash + '"]').tab('show');

	//sincroniza las "pills" laterales con los enlaces de la barra de navegacion, 
	//	cambienado la url y activando los botones correspondientes

	$(window).on('hashchange', function () {
		var hash = window.location.hash;
		$('.cambiaURL[href="' + hash + '"]').tab('show');


	});
	$('.cambiaURL').click(function () {
		window.location.hash = this.hash;
	});
	//   en vista de movil cierra la nav-bar superior cuando se selecciona un enlace

	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a')) {
			$(this).collapse('hide');
			$(window).scrollTop(0);


		}
	});



});

$(function () {
	//activar ventanas modales de información del pie de página:
	$('#AvisoLegal, #Certificaciones, #Politicas').click(function () {
		$('#'+ this.id +'Modal').modal('toggle');
	});

});