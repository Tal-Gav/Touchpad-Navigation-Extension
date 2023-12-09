console.log("injected");
let isScrolling = false;

const doScroll = (e) => {
  if (isScrolling) return;

  const deltaX = Math.max(-1, Math.min(1, e.deltaX));

  if (deltaX === 1) {
    history.forward();
  } else if (deltaX === -1) {
    history.back();
  }

  // Set a flag to prevent multiple scrolls within a short timeframe
  isScrolling = true;
  setTimeout(function () {
    isScrolling = false;
  }, 1000); // Adjust the delay (in milliseconds) as needed
};

if (document.addEventListener) {
  document.addEventListener("wheel", doScroll, { passive: true });
}
