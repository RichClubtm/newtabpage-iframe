console.log("New tab page loaded");
chrome.storage.local.get("newtabUrl", data => {
  console.log("Retrieved from storage:", data);
  const url = data.newtabUrl || "https://www.bing.com";
  document.getElementById("frame").src = url;
});
