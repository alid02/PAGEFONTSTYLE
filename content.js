    //cannot use the chrome api for highlight so we will send msg to eventpage
    chrome.runtime.sendMessage({todo: "showPageAction"});        //sending the message


//listen to the popup message to change the color on request
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if (request.todo == "changeColor"){
            var addColor = '#' + request.clickedColor;
            $('.api').css('color', addColor);

        }
    });