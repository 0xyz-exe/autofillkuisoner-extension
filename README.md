# 🎓 AutofillKuisoner Chrome Extension

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/0xyz-exe/autofillkuisoner-extension)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Not%20Published-red.svg)](https://chrome.google.com/webstore)

Repository: https://github.com/0xyz-exe/autofillkuisoner-extension

## Screenshots

### Extension Popup Interface & Settings
![Extension popup](docs/screenshots/01_popup_interface.png)

### Survey Form Auto-Fill Demonstration
![Autofill demo](docs/screenshots/02_autofill_demo.png)

### Indonesian Academic Response Presets
![Response presets](docs/screenshots/03_response_presets.png)

A professional Chrome extension designed to automatically fill academic survey forms with realistic Indonesian responses, specifically tailored for university course evaluations.

## ✨ Key Features

### 🚀 **Intelligent Auto-Fill**
- **One-Click Survey Completion** - Fill all survey fields instantly
- **Context-Aware Responses** - Smart detection of field types and appropriate responses
- **Multi-Field Support** - Handles text areas, dropdowns, and checkboxes

### 🎯 **Academic Focus**
- **Realistic Academic Responses** - Professionally crafted responses for each competency
- **Indonesian Language Support** - Native Indonesian responses for local academic context
- **Competency-Based Categories** - Tailored responses for pedagogical, professional, social, and personal competencies

### ⚙️ **Customizable Settings**
- **Response Randomization** - Vary responses to avoid repetition
- **Visual Feedback** - Highlight filled fields with smooth animations
- **Notification System** - Real-time feedback on completion status
- **Keyboard Shortcuts** - Quick access with Ctrl+Shift+F

## � Table of Contents

- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Supported Field Types](#-supported-field-types)
- [Configuration](#-configuration)
- [Troubleshooting](#-troubleshooting)
- [Security & Privacy](#-security--privacy)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Installation

### Method 1: Developer Mode (Recommended)

1. **Download the Extension**
   ```bash
   git clone https://github.com/0xyz-exe/autofillkuisoner-extension.git
   # or download ZIP and extract
   ```

2. **Open Chrome Extensions Page**
   - Navigate to `chrome://extensions/`
   - Or use Chrome menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle "Developer mode" in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked"
   - Select the `autofillkuisoner-extension` folder
   - The extension icon will appear in your toolbar

### Method 2: Packed Extension

1. **Pack the Extension**
   - In Extensions page, click "Pack extension"
   - Select the extension folder
   - Generate `.crx` file

2. **Install Packed Extension**
   - Drag and drop the `.crx` file into Extensions page
   - Confirm installation when prompted

> **Note**: Chrome may display security warnings for unpacked extensions. This is normal for development installations.

## 📖 Usage Guide

### Quick Start

1. **Navigate to Survey Page**
   - Open any university course evaluation survey
   - Ensure the form is fully loaded

2. **Access Extension**
   - Click the 🎓 icon in Chrome toolbar
   - The popup will display current page status

3. **Choose Action**
   | Action | Description |
   |--------|-------------|
   | **Fill All Fields** | Automatically fills all text areas, dropdowns, and checkboxes |
   | **Fill Ratings Only** | Fills only satisfaction rating dropdowns |
   | **Fill Text Only** | Fills only text area fields with academic responses |
   | **Clear All** | Removes all auto-filled content |

### Advanced Usage

#### Keyboard Shortcuts
- **`Ctrl + Shift + F`** - Instantly fill all survey fields

#### Customization Options
- **Response Randomization** - Enable variety in responses
- **Field Highlighting** - Visual feedback for filled fields
- **Notifications** - Success/error notifications

### Best Practices

✅ **Do:**
- Review responses before submission
- Use appropriate settings for your context
- Ensure responses reflect genuine academic experience

❌ **Don't:**
- Submit without reviewing content
- Use for non-academic surveys
- Rely entirely on automated responses for critical evaluations

## 🎯 Supported Field Types

### Text Areas (Academic Competencies)

| Competency Type | Response Examples |
|----------------|-------------------|
| **🧠 Pedagogical** | Teaching methods, learning approaches, student engagement strategies |
| **👥 Social** | Communication skills, collaboration, interpersonal relationships |
| **🎓 Professional** | Subject matter expertise, continuous learning, industry relevance |
| **🌟 Personal** | Character, ethics, professional conduct, leadership qualities |
| **📝 Suggestions** | Constructive feedback, improvement recommendations, course enhancement ideas |

### Dropdown Fields (Satisfaction Ratings)

| Rating Level | Description | Usage Weight |
|-------------|-------------|--------------|
| **Sangat Puas** | Excellent performance | 40% |
| **Puas** | Good performance | 30% |
| **Tidak Puas** | Below expectations | 20% |
| **Sangat Tidak Puas** | Poor performance | 10% |

### Interactive Elements

- **✅ Checkboxes** - Automatically marked as completed
- **📊 Radio Buttons** - Intelligent selection based on context
- **🔄 Dynamic Forms** - Adapts to various survey formats

## ⚙️ Configuration

### Extension Settings

Access settings through the extension popup:

```javascript
// Default Configuration
{
  randomizeResponses: true,    // Vary responses for authenticity
  highlightFields: true,       // Visual feedback on filled fields
  showNotifications: true,     // Success/error notifications
  intelligentFill: true        // Context-aware field detection
}
```

### Response Customization

The extension includes over **50 professionally crafted responses** across different academic competencies, ensuring:

- **Contextual Relevance** - Responses match the specific competency being evaluated
- **Professional Tone** - Academic language appropriate for university evaluations
- **Variety** - Multiple response variations to avoid repetition
- **Cultural Sensitivity** - Responses tailored for Indonesian academic context

## 🔧 Troubleshooting

### Common Issues & Solutions

<details>
<summary><strong>❌ Extension Not Appearing in Toolbar</strong></summary>

**Possible Causes:**
- Developer mode not enabled
- Extension not properly loaded
- Chrome needs restart

**Solutions:**
1. Ensure Developer Mode is toggled ON in `chrome://extensions/`
2. Click "Reload" button for the extension
3. Restart Chrome browser
4. Check if extension is pinned to toolbar
</details>

<details>
<summary><strong>❌ Fields Not Being Filled</strong></summary>

**Possible Causes:**
- Page not fully loaded
- Form fields not recognized
- JavaScript restrictions

**Solutions:**
1. Wait for page to fully load before using extension
2. Refresh the survey page
3. Check browser console for error messages (F12)
4. Try filling fields individually using specific buttons
</details>

<details>
<summary><strong>❌ Responses Not Appropriate</strong></summary>

**Possible Causes:**
- Field context not properly detected
- Custom form structure

**Solutions:**
1. Manually review and edit responses
2. Use "Fill Text Only" for better control
3. Report field detection issues for future improvements
</details>

### Debug Information

To report issues, please include:
- Chrome version
- Extension version
- Survey website URL (if public)
- Console error messages
- Screenshots of the issue

## 🛡️ Security & Privacy

### Privacy Policy

| Data Type | Collection | Storage | Sharing |
|-----------|------------|---------|---------|
| **Personal Data** | ❌ None | ❌ None | ❌ None |
| **Survey Responses** | ❌ None | ❌ None | ❌ None |
| **Usage Statistics** | ❌ None | ❌ None | ❌ None |
| **Settings** | ✅ Local Only | 🏠 Browser Local | ❌ None |

### Security Measures

- **🔒 Local Processing** - All operations performed locally in browser
- **🚫 No External Requests** - No data transmitted to external servers
- **⚡ Minimal Permissions** - Only requests necessary permissions
- **🛡️ Sandboxed Execution** - Runs in Chrome's secure extension environment

### Permissions Explained

```json
{
  "activeTab": "Access current tab to fill forms",
  "storage": "Save user preferences locally",
  "scripting": "Inject form-filling functionality"
}
```

## 🔄 Updates & Maintenance

### Version History

- **v1.0.0** - Initial release with basic autofill functionality
- **v1.1.0** - Added essay field support and improved context detection
- **v1.2.0** - Enhanced UI and added keyboard shortcuts

### Update Process

1. **Automatic Updates** - Chrome will auto-update if published to Web Store
2. **Manual Updates** - Replace extension folder with new version
3. **Reload Extension** - Click reload button in Extensions page

### Roadmap

- [ ] Support for more form types
- [ ] Enhanced context detection algorithms
- [ ] Multi-language support
- [ ] Advanced customization options

## 🤝 Contributing

We welcome contributions to improve AutofillKuisoner! Here's how you can help:

### Development Setup

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/autofillkuisoner-extension.git
   cd autofillkuisoner-extension
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit & Push**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

5. **Submit Pull Request**
   - Describe changes clearly
   - Include screenshots if UI changes
   - Reference related issues

### Code Style Guidelines

- Use consistent indentation (2 spaces)
- Write descriptive variable names
- Add JSDoc comments for functions
- Follow existing naming conventions

### Areas for Contribution

- 🐛 **Bug Fixes** - Report and fix issues
- 🌟 **New Features** - Enhance functionality
- 📚 **Documentation** - Improve README and code comments
- 🌍 **Localization** - Add support for other languages
- 🧪 **Testing** - Add unit tests and integration tests

## 📞 Support

### Getting Help

- **📖 Documentation** - Check this README first
- **🐛 Bug Reports** - [Open an issue](https://github.com/wondrv/autofillkuisoner-extension/issues)
- **💡 Feature Requests** - [Submit a request](https://github.com/wondrv/autofillkuisoner-extension/issues)
- **❓ Questions** - [Start a discussion](https://github.com/wondrv/autofillkuisoner-extension/discussions)

### Issue Template

When reporting issues, please include:

```
**Description:**
Brief description of the issue

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Environment:**
- Chrome Version: [e.g., 120.0.6099.129]
- Extension Version: [e.g., 1.0.0]
- Operating System: [e.g., Windows 11]

**Screenshots:**
If applicable, add screenshots
```

## 📄 License

```
MIT License

Copyright (c) 2025 AutofillKuisoner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🏆 Acknowledgments

- Thanks to all contributors who help improve this extension
- Inspired by the need for efficient academic survey completion
- Built with modern web technologies and Chrome Extension APIs

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ for the academic community

[Report Bug](https://github.com/wondrv/autofillkuisoner-extension/issues) · [Request Feature](https://github.com/wondrv/autofillkuisoner-extension/issues) · [Contribute](https://github.com/wondrv/autofillkuisoner-extension/pulls)

</div>