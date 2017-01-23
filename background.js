chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.url) {
        chrome.tabs.create({url: request.url, selected: false});
        sendResponse({response: "Opened in new tab"});
    }
});