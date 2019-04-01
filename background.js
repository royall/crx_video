chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'baidu.com'}})
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }
  ]);
});