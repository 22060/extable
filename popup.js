document.getElementById('IE2').addEventListener('click', async () => {
  // 現在のタブでcontent.jsを実行
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});

document.getElementById('table3').addEventListener('click', async () => {
    // 現在のタブでcontent.jsを実行
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['table3.js']
    });
    }
);
