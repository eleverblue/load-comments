# Load Comments - YouTube Extension

A lightweight Chrome extension that improves YouTube performance by deferring comment loading until needed. Comments are loaded with a simple button click, reducing initial page load time and memory usage.

## Features

- 🚀 Improves initial page load performance
- 💾 Reduces memory usage
- 🎯 Simple one-click comment loading
- 🎨 Clean, YouTube-styled interface
- 🔄 Works seamlessly with YouTube's navigation
- 🪶 Lightweight implementation

## Installation

### From Chrome Web Store
*(Coming soon)*

### Manual Installation
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## How to Use

1. Navigate to any YouTube video
2. You'll see a "Load Comments" button below the video
3. Click the button to load/show comments
4. Click "Hide Comments" to hide them again

## Technical Details

The extension uses:
- Manifest V3
- MutationObserver for reliable comment section detection
- Debounced initialization for performance

## Credits
Made with ❤️ by EleverBlue
<br>https://github.com/eleverblue/load-comments
