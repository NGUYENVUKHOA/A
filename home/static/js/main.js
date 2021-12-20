$(document).ready(function () {
	$('.check-all').prop('disabled', true);
	$('.check-pos').prop('disabled', true);
	$('.check-host-collection').prop('disabled', true);
	$('.check-chat').prop('disabled', true);
	$('.check-live-stream').prop('disabled', true);
	$('.check-social-management').prop('disabled', true);

  htmlbodyHeightUpdate();
  $(window).resize(function () {
    htmlbodyHeightUpdate();
  });
  $(window).scroll(function () {
    height2 = $(".main").height();
    htmlbodyHeightUpdate();
  });

	// Active Sidebar
	const { href } = window.location;
	const links = href.split("/")
	$.each($(`.sidebar a`), function () {
		if ("/"+links[3] === $(this).attr("href")) {
			$(".sidebar a").removeClass("mm-active");
			$(this).addClass("mm-active");
		}
	});

	// Check role login
	$('input[type=checkbox]').change( async function() {
		const value = parseInt($(this).val())

		if(value === 1 && $('.check-all').is(':checked')){
			$('.check-pos').prop('checked', true);
			$('.check-host-collection').prop('checked', true);
			$('.check-chat').prop('checked', true);
			$('.check-live-stream').prop('checked', true);
			$('.check-social-management').prop('checked', true);

			$('.check-pos').prop('disabled', true);
			$('.check-host-collection').prop('disabled', true);
			$('.check-chat').prop('disabled', true);
			$('.check-live-stream').prop('disabled', true);
			$('.check-social-management').prop('disabled', true);

			const response = await axios({
				method: 'post',
				url: `http://${HOST_API}/role-login-user`,
				// headers: { "X-CSRFToken": '{{csrf_token}}' },
				data: { role: 1},
				json: true
			});

		}else if(value === 1 && !$('.check-all').is(':checked')){
			$('.check-pos').prop('checked', false);
			$('.check-host-collection').prop('checked', false);
			$('.check-chat').prop('checked', false);
			$('.check-live-stream').prop('checked', false);
			$('.check-social-management').prop('checked', false);

			$('.check-pos').prop('disabled', false);
			$('.check-host-collection').prop('disabled', false);
			$('.check-chat').prop('disabled', false);
			$('.check-live-stream').prop('disabled', false);
			$('.check-social-management').prop('disabled', false);
		}else {
			console.log('44444')
		}

		if($('.check-pos').is(':checked')
			&& $('.check-host-collection').is(':checked')
			&& $('.check-chat').is(':checked')
			&& $('.check-live-stream').is(':checked')
			&& $('.check-social-management').is(':checked')
		){
			$('.check-all').prop('checked', true);
		}else {
			$('.check-all').prop('checked', false);
		}
	})


});

