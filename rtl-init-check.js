if (document.documentElement.getAttribute('dir') == 'rtl') {
  chrome.runtime.sendMessage({language: {"direction": "RTL", "backgroundColor": "#ffe900"}});
}
