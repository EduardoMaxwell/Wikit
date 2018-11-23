var menuItem = {
    "id": "wikitid",
    "title": "Wikit",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, '[')
;}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "wikitid" && clickData.selectionText) {
        var wikiUrl = "https://pt.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);

        var createData = {
            "url" : wikiUrl,
            "type": "popup",
            "top": 2,
            "left": 2,
            "width": screen.availWidth/2,
            "height":screen.availHeight/2
        }
        chrome.windows.create(createData, function(){});
    }
});