// now we need to listen the message send by the content so
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction"){  //if we got request to show the page action icon
        //specifie or highlight we have chrome api
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs){  //but first we have to retrive all the tab
            //tabs must be active tab and should be in the current windows
            chrome.pageAction.show(tabs[0].id);    //  to shows and highlight page actions icons
        });
    }
});

