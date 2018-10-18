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
		$('.menu-toggle').click(function(event)	{
			event.stopPropagation();

			$(this).toggleClass('active');
			
			$('.menu').toggleClass('menu-visible');
			
		});

		$(document).click( function( event ) {
			var menuMobile = $('.menu-visible');

			if ( menuMobile.has( event.target ).length === 0) {
				menuMobile.toggleClass('menu-visible');
			}
		});

  });

})(jQuery, window, document);
