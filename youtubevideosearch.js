function getParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}
function getVideoTab() {
	var videoTab = $('a');
	for(var i=0;i<videoTab.length;i++) {
		if (videoTab[i].innerHTML.toLowerCase().includes("videos")) {
			return videoTab[i];
		}
	}

}
$(function() {
	var toggle = false;
	chrome.storage.sync.get({'enable_youtube_video_search' : true}, function(result) {
		toggle = result.enable_youtube_video_search;
		if (toggle == true) { getVideoTab().setAttribute("href", "https://www.youtube.com/results?search_query=" + getParameter("q")); }
	});
});