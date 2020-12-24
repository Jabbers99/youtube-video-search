$(function(){
	
	chrome.storage.sync.get(['enable_youtube_video_search'], function(result) {
		var checked = result.enable_youtube_video_search;
		console.log(checked);
		if (checked == true) {
			$('#enable_youtube_video_search').children().first().prop("checked", true);
		} else {
			$('#enable_youtube_video_search').children().first().prop("checked", false);
		}
	});

	$('#enable_youtube_video_search').checkbox({
	    onChecked: function() {
	    	console.log("checked");
			chrome.storage.sync.set({"enable_youtube_video_search": true}, function() {});
	    },
	    onUnchecked: function() {
			console.log("unchecked");
			chrome.storage.sync.set({"enable_youtube_video_search": false}, function() {});
	    }
	});
	console.log($('#enable_youtube_video_search'));
	console.log("hello");
});
