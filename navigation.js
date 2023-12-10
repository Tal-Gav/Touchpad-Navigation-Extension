let isScrolling = false;
const sensitivityThreshold = 4;

const doScroll = (e) => {
  // Check if scrolling is currently being processed,
  // if true, exit the function to avoid handling multiple scrolls in quick succession
  if (isScrolling) return;
  const deltaX = e.deltaX;
  console.log(deltaX);
  if (deltaX >= sensitivityThreshold) {
    console.log("swiped");
    history.forward();
  } else if (deltaX <= -sensitivityThreshold) {
    console.log("swiped");
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
