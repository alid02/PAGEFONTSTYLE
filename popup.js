$(function() {
    console.log('working');
    var color = $('#fontColor').val();      //get the valur user type in color picker
    $('#fontColor').on("change paste keyup", function(){   //on this 3 event exicute a functiom a
        color = $(this).val();      //assign a particular value
    });

    $('#btnChange').click(function(){       //listen to the click button
       // we are going to send a message to tab where we click this button
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            //send to 1st tab and what the message content
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color})
        });
    });
});