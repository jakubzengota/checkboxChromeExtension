document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('checkButton');
    checkButton.addEventListener('click', function() {
        // Pobiera aktywną kartę, aby użyć jej ID w wykonaniu skryptu
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const tab = tabs[0]; // Bierze pierwszą z pasujących kart, która powinna być aktywną kartą
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['contentScript.js']
            });
        });
    });
});