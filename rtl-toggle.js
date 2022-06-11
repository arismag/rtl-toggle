if (document.documentElement.getAttribute('dir') == null || document.documentElement.getAttribute('dir') != 'rtl') {
  document.documentElement.setAttribute('dir', 'rtl');
  chrome.runtime.sendMessage({language: {"direction": "RTL", "backgroundColor": "#ffe900"}});
} else {
  document.documentElement.setAttribute('dir', 'ltr');
  chrome.runtime.sendMessage({language: {"direction": "", "backgroundColor": "#0000"}});
}
