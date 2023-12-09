var doScroll = function (e) {
  const deltaX = Math.max(-1, Math.min(1, e.deltaX));

  if (deltaX === 1) {
    document.getElementById("info").innerHTML = "left";
    chrome.tabs.goForward();
  } else if (deltaX === -1) {
    document.getElementById("info").innerHTML = "right";
    chrome.tabs.goBack();
  }
};

if (document.addEventListener) {
  document.addEventListener("wheel", doScroll, { passive: true });
}
