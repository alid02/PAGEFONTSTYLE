    //cannot use the chrome api for highlight so we will send msg to eventpage
    chrome.runtime.sendMessage({todo: "showPageAction"});        //sending the message