/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function ($, window, document, undefined) {

	'use strict';

  $(function () {
		// FastShell

		$('.menu-toggle').click( function( event ) {
			event.stopPropagation()

			$(this).toggleClass('active');

			// console.log( $('.menu').hasClass('menu-visible') )

			// if ( $('.menu').hasClass('menu-visible') ) {
			// 	$('.menu').removeClass('menu-visible'); return;
			// } 
			
			$('.menu').toggleClass('menu-visible');
			$('.menu-visible').slideToggle(400);

		});
  });

})(jQuery, window, document);
