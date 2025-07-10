// Background service worker for AutofillKuisoner
chrome.runtime.onInstalled.addListener(() => {
    console.log('AutofillKuisoner extension installed');
});

// Handle keyboard shortcuts
chrome.commands.onCommand.addListener((command) => {
    if (command === 'fill-all') {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'fillAll'});
        });
    }
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
    // This will open the popup automatically
    // No additional action needed
});