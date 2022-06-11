chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['rtl-toggle.js'],
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.action.setBadgeText({text: request.language.direction, tabId: sender.tab.id});
    chrome.action.setBadgeBackgroundColor({color: request.language.backgroundColor, tabId: sender.tab.id});
  }
);
