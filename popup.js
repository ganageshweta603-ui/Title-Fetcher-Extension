document.getElementById("btn").addEventListener("click", async () => {
    // Query active tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Get title from tab
    const title = tab.title;

    // Display in popup
    document.getElementById("result").innerText = "Title: " + title;
});