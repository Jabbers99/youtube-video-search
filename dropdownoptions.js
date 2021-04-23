chrome.storage.sync.get({'enable_youtube_video_search' : true}, function(result) {
	var checked = result.enable_youtube_video_search;
	if (checked == true) {
		$('#enable_youtube_video_search').children().first().prop("checked", true);
	} else {
		$('#enable_youtube_video_search').children().first().prop("checked", false);
	}
});

$('#enable_youtube_video_search').checkbox({
    onChecked: function() {
		chrome.storage.sync.set({"enable_youtube_video_search": true}, function() {});
    },
    onUnchecked: function() {
		chrome.storage.sync.set({"enable_youtube_video_search": false}, function() {});
    }
});
