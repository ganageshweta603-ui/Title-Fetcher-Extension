#  Text Picker — Chrome Extension

A simple Chrome extension that fetches and displays the **title of the current active tab** when a button is clicked inside the popup.

---

##  Features

- Displays a popup with a button  
- On button click → automatically reads the active tab title  
- Shows the tab title inside the popup  
- Built using **HTML, CSS, JavaScript, and Manifest V3**

##  Folder Structure

Fetcher-Extension/
│── manifest.json
│── popup.html
│── popup.js
│── popup.css
│── images 

##  How It Works

1. User opens the extension popup  
2. Clicks the **“Get Current Tab Title”** button  
3. The extension uses:
--javascript

chrome.tabs.query({ active: true, currentWindow: true })

Chrome returns the active tab

The popup displays:

Title: <page title>
