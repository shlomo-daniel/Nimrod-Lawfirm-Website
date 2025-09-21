/**
 * Measures the height of a div element including padding and margin
 * @param {string|HTMLElement} element - The div element or CSS selector
 * @returns {number} The height in pixels including padding and margin
 */

const painSection = document.querySelector(".pain-section");
const allSlides = document.querySelectorAll(".pain-card");
let currentHeight = 0;
let maxHeight = 0;

addEventListener("resize", () => {
  const height = getMaxHeight();
  painSection.style.minHeight = `${height}px`;
  console.log("resize");
});

function getMaxHeight() {
  allSlides.forEach((slide) => {
    const height = measureDivHeight(slide);
    if (height > currentHeight) {
      maxHeight = height;
    } else {
      console.log("too small");
    }
    console.log(maxHeight);
    return maxHeight;
  });
}

function measureDivHeight(element) {
  // Get the element if a selector string was passed
  const div =
    typeof element === "string" ? document.querySelector(element) : element;

  // Check if element exists
  if (!div) {
    console.error("Element not found");
    return 0;
  }

  // Check if it's a valid HTML element
  if (!(div instanceof HTMLElement)) {
    console.error("Provided element is not a valid HTML element");
    return 0;
  }

  // Get computed styles to include margins
  const computedStyle = window.getComputedStyle(div);
  const marginTop = parseFloat(computedStyle.marginTop) || 0;
  const marginBottom = parseFloat(computedStyle.marginBottom) || 0;

  // offsetHeight includes padding and border, then add margins
  return div.offsetHeight + marginTop + marginBottom;
}
