# Bitcoin Price Tracker

Bitcoin Price Tracker is a Chrome extension that provides real-time Bitcoin price updates using the Binance API. This lightweight and user-friendly extension allows users to monitor BTC/USDT prices directly from their browser with a simple and elegant interface, including support for dark and light themes.

## Features

- **Real-Time Price Updates**:
  - Fetches and displays the current Bitcoin price in USD from Binance.
  - Updates every 10 seconds for accurate tracking.

- **Dynamic Badge Display**:
  - Shows the Bitcoin price directly on the Chrome toolbar icon.
  - Displays a short price format (e.g., "55k") for easy readability.

- **Theming Options**:
  - Switch between dark and light themes with a toggle button.
  - Automatically remembers the selected theme using local storage.

- **Popup Interface**:
  - Displays Bitcoin price, last update time, and a direct link to Binance for detailed information.
  - Built with a clean and intuitive design.

## Project Structure

- **`manifest.json`**:
  - Defines the extension metadata and permissions.
  - Specifies the popup and background scripts.

- **`src/html/popup.html`**:
  - The main user interface of the extension.

- **`src/js/popup.js`**:
  - Handles fetching Bitcoin price data and updating the popup UI.
  - Manages theme toggling and update intervals.

- **`src/js/background.js`**:
  - Runs in the background to fetch Bitcoin price and update the badge text.

- **`assets/images/bitcoin.png`**:
  - Icon set used for the extension badge and interface.

- **`src/css/style.css`**:
  - Stylesheet for the popup interface, providing a responsive and visually appealing design.

## Installation and Usage

1. **Download or Clone the Repository**:
   ```bash
   git clone https://github.com/EnesKeremAYDIN/bitcoin-price-tracker-extension.git
   cd bitcoin-price-tracker
   ```

2. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions`.
   - Enable "Developer Mode" in the top-right corner.
   - Click "Load unpacked" and select the project directory.

3. **Start Using**:
   - The Bitcoin Price Tracker icon will appear in the toolbar.
   - Click the icon to open the popup and view real-time price updates.

## Requirements

- **Google Chrome** (version 88 or higher).
- An internet connection to fetch data from Binance API.

## Disclaimer

Bitcoin Price Tracker is intended for informational purposes only. It fetches data from Binance and does not guarantee accuracy or availability. Always verify price data before making financial decisions.
