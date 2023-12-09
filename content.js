const injectScript = (src) => {
  const s = document.createElement("script");
  s.src = chrome.runtime.getURL(src);
  s.onload = () => s.remove();
  (document.head || document.documentElement).append(s);
};
// Inject navigation script to current page
injectScript("navigation.js");
