const urlInput = document.getElementById("url");
const status = document.getElementById("status");

console.log("Options page loaded");

// Load saved value
chrome.storage.local.get("newtabUrl", data => {
  console.log("Loaded from storage:", data);
  if (data.newtabUrl) urlInput.value = data.newtabUrl;
});

// Save handler
document.getElementById("save").addEventListener("click", () => {
  const url = urlInput.value.trim();
  console.log("Save clicked with:", url);
  if (!url) {
    status.textContent = "❌ Please enter a URL.";
    return;
  }
  chrome.storage.local.set({ newtabUrl: url }, () => {
    console.log("Saved to storage:", url);
    status.textContent = "✅ Saved: " + url;
  });
});
