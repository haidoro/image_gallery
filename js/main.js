$(function(){
    $('.thumbnails li a').on('click',  function(){   	
    	//ボタンに枠線を付ける
    	$('img').removeClass('selected');    	
    	$('img',this).addClass('selected');
    	
    	//イメージを差し替え
    	$(".mainimage img").before("<img src='"+$(this).attr("href")+"' alt=''>");
		$(".mainimage img:last").fadeOut("fast",function(){
			$(this).remove();
		});
		return false;
    })
});