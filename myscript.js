$('.listing-page .thing').unbind('click').click(function(e) {
    e.preventDefault();

    if($(this).attr('data-domain').indexOf('self')!=0) {
        chrome.runtime.sendMessage({url: $(this).attr('data-url')}, function(response) {
        });
    }
    
    chrome.runtime.sendMessage({url: $(this).find('.first a').attr('href')}, function(response) {
    });
});