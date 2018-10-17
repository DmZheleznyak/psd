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
		$('.menu-toggle').click(function() {
			$(this).toggleClass('active-menu')
			$('.menu').slideToggle(300)
		})
  });

})(jQuery, window, document);
