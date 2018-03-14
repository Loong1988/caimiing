	//滚动新闻 
		$(function() {
	    var scrollTimer = null;
	    var delay = 2000;
	    	scrollTimer = setInterval(function() {
	            scrollNews();
	        }, delay);
	    //1.鼠标对新闻触发mouseout事件后每2s调用scrollNews() 
	    //2.鼠标对新闻触发mouseover事件后停止调用scrollNews() 
	    //3.初次加载页面触发鼠标对新闻的mouseout事件 
/*	    $('div.scrollNews').hover(function() {
	        clearInterval(scrollTimer);
	    }, function() {
	        scrollTimer = setInterval(function() {
	            scrollNews();
	        }, delay);
	    }).triggerHandler('mouseout');*/

	});
	function scrollNews() {
	    var $news = $('div.scrollNews>ul');
	    var $lineHeight = $news.find('li:first').height();
	    $news.animate({ 'marginTop': -$lineHeight + 'px' }, 600, function() {
	        $news.css({ margin: 0 }).find('li:first').appendTo($news);
	    });
	}