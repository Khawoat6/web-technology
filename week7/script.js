$(function() {

	var root = 'https://jsonplaceholder.typicode.com';

	$.ajax ({
	    url: root + '/posts/1',
	    method: 'GET'
	}).then(function(data) {
	    console.log(data);
	    $('.messageTitle').empty().append(data.title);
	    $('.messageBody').empty().append(data.body);
	});
	$('.getPost').on('click',function(event) {
		var id = $('.postId').val();
		getPost(id);
	});	
});

function getPost(id) {
	var root = 'https://jsonplaceholder.typicode.com';
	$.ajax({
		url: root + '/comments?postId=' + id,
		method: 'GET'
	}).then(function(data){
		console.log(data);
		$('.commentList').empty();
		$.each(data, function(index,value){
			$('.commentList').append('<li>' + value.email+'</li>');
		});
	});
}
