document.addEventListener('DOMContentLoaded', function() {
    // Get references to UI elements
    const statusText = document.getElementById('status-text');
    const fieldCount = document.getElementById('field-count');
    const filledCount = document.getElementById('filled-count');
    const progressSection = document.getElementById('progress-section');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    // Button references
    const fillAllBtn = document.getElementById('fill-all-btn');
    const fillRatingsBtn = document.getElementById('fill-ratings-btn');
    const fillTextBtn = document.getElementById('fill-text-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    
    // Option references
    const randomizeResponses = document.getElementById('randomize-responses');
    const highlightFields = document.getElementById('highlight-fields');
    const showNotifications = document.getElementById('show-notifications');

    // Initialize popup
    init();

    async function init() {
        // Load settings
        await loadSettings();
        
        // Get current tab info
        const tabs = await chrome.tabs.query({active: true, currentWindow: true});
        const currentTab = tabs[0];
        
        // Check if content script is ready
        try {
            const response = await chrome.tabs.sendMessage(currentTab.id, {action: 'getStatus'});
            updateStatus(response);
        } catch (error) {
            statusText.textContent = 'Halaman tidak didukung';
            statusText.className = 'status-value error';
        }
    }

    // Button event listeners
    fillAllBtn.addEventListener('click', () => executeAction('fillAll'));
    fillRatingsBtn.addEventListener('click', () => executeAction('fillRatings'));
    fillTextBtn.addEventListener('click', () => executeAction('fillText'));
    clearAllBtn.addEventListener('click', () => executeAction('clearAll'));

    // Option event listeners
    randomizeResponses.addEventListener('change', saveSettings);
    highlightFields.addEventListener('change', saveSettings);
    showNotifications.addEventListener('change', saveSettings);

    async function executeAction(action) {
        const tabs = await chrome.tabs.query({active: true, currentWindow: true});
        const currentTab = tabs[0];
        
        // Show progress
        showProgress();
        
        // Get current settings
        const settings = {
            randomizeResponses: randomizeResponses.checked,
            highlightFields: highlightFields.checked,
            showNotifications: showNotifications.checked
        };
        
        try {
            const response = await chrome.tabs.sendMessage(currentTab.id, {
                action: action,
                settings: settings
            });
            
            updateStatus(response);
            hideProgress();
            
            if (response.success) {
                showSuccessMessage(response.message);
            } else {
                showErrorMessage(response.message);
            }
        } catch (error) {
            hideProgress();
            showErrorMessage('Terjadi kesalahan: ' + error.message);
        }
    }

    function updateStatus(response) {
        if (response && response.stats) {
            fieldCount.textContent = response.stats.totalFields;
            filledCount.textContent = response.stats.filledFields;
            
            if (response.stats.filledFields > 0) {
                statusText.textContent = 'Field terisi';
                statusText.className = 'status-value success';
            } else {
                statusText.textContent = 'Siap mengisi';
                statusText.className = 'status-value';
            }
        }
    }

    function showProgress() {
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Mengisi field...';
        
        // Animate progress
        let width = 0;
        const interval = setInterval(() => {
            width += 10;
            progressFill.style.width = width + '%';
            
            if (width >= 100) {
                clearInterval(interval);
                progressText.textContent = 'Selesai!';
            }
        }, 200);
    }

    function hideProgress() {
        setTimeout(() => {
            progressSection.style.display = 'none';
        }, 1000);
    }

    function showSuccessMessage(message) {
        const popup = document.querySelector('.popup-container');
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        popup.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    function showErrorMessage(message) {
        const popup = document.querySelector('.popup-container');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        popup.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }

    async function loadSettings() {
        try {
            const result = await chrome.storage.sync.get([
                'randomizeResponses',
                'highlightFields', 
                'showNotifications'
            ]);
            
            randomizeResponses.checked = result.randomizeResponses !== false;
            highlightFields.checked = result.highlightFields !== false;
            showNotifications.checked = result.showNotifications !== false;
        } catch (error) {
            console.error('Error loading settings:', error);
        }
    }

    async function saveSettings() {
        try {
            await chrome.storage.sync.set({
                randomizeResponses: randomizeResponses.checked,
                highlightFields: highlightFields.checked,
                showNotifications: showNotifications.checked
            });
        } catch (error) {
            console.error('Error saving settings:', error);
        }
    }
});