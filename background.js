chrome.action.onClicked.addListener(async (tab) => {
    // 現在のタブで content.js を実行
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
  