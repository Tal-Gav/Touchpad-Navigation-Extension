let isScrolling = false; // bool for avoiding multiple scrolls
const sensitivityThreshold = 4; // responsible for swipe sensitivity

const doScroll = (e) => {
  // Check if scrolling is currently being processed,
  // if true, exit the function to avoid handling multiple scrolls in quick succession
  if (isScrolling) return;
  const deltaX = e.deltaX;

  if (deltaX >= sensitivityThreshold) {
    history.forward();
  } else if (deltaX <= -sensitivityThreshold) {
    history.back();
  }

  // Set a flag to prevent multiple scrolls within a short timeframe
  isScrolling = true;
  setTimeout(function () {
    isScrolling = false;
  }, 1000);
};

// Add EventListener for 'wheel' event - scrolling
document.addEventListener("wheel", doScroll, { passive: true });
