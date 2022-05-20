(function ($) {
	$(document).ready(function ($) {
		if ($('#payKeeperCard').length > 0) {
			$('#payKeeperCard').mask('9999  9999  9999  9999  999', { placeholder: '0' });
		}
	});
})(jQuery);
