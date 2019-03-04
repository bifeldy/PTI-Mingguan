$(document).ready(function(){
	$('.btnDetails').on('click', function(){
		$('#image').attr("src", $(this).closest('.col-item').find('[id^="image-"]').attr('src'));
		$('#name').text($(this).closest('.info').find('[id^="name-"]').text());
		$('#price').text($(this).closest('.info').find('[id^="price-"]').text());
		$('#rating').html($(this).closest('.info').find('[id^="rating-"]').html());
		$('#productModal').modal('show');
	});
	$('.btnAdd').on('click', function(){
		$('#noOrder').remove();
		$('tbody').append(`
			<tr>
				<th scope="col">`+document.getElementById('tableData').rows.length+`</th>
				<th scope="col">${(this).closest('.info').find('[id^="name-"]').text()}</th>
				<th scope="col">${(this).closest('.info').find('[id^="price-"]').text()}</th>
				<th scope="col">${(this).closest('.info').find('[id^="rating-"]').html()}</th>
			</tr>`
		);
	});
});