
$(window).on('load', function() {
	var toggle = false;
	chrome.storage.sync.get(['enable_youtube_video_search'], function(result) {
		toggle = result.enable_youtube_video_search;
		if (toggle == true) {
			var searchQ = "";
			// get search text
			var searchText = document.getElementsByTagName('input')
			for(var i=0;i<searchText.length;i++) {
				if (searchText[i].getAttribute("title") == "Search") {
					searchQ = searchText[i].value;
					break;
				}
			}	
			


			// get video tab
			var videoTab = document.getElementsByTagName('a')
			for(var i=0;i<videoTab.length;i++) {
				if (videoTab[i].innerHTML.toLowerCase().includes("videos")) {
					var videos = videoTab[i];
					// set href hyperlink to youtube search query link
					videos.setAttribute("href", "https://www.youtube.com/results?search_query="+searchQ);
					break;
				}
			}
		}
	});
});
