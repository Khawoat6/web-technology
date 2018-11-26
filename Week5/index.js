function changeH1() 
{
	document.getElementById("header").innerHTML = "Hello JavaScript!";
}

function like()
{
	var x = document.getElementsByClassName("btnlike");
	x[0].innerHTML = "Liked!";
}

// jQuery
$(function(){
	var count = 0;
	$('.commentBtn').on('click', function() {
		var msg = $('.commentMsg').val();
		if(count < 10){
			$('.commentList').append('<li>'+msg+'</li>');
			$('.commentMsg').val();
		}
		count++;
	});
	$('.commentMsg').on('keyup',function() {
		let msg = $('.commentMsg').val();
		let msg = $(this).val();
		$('.preview').emply().html(msg);
	});
});