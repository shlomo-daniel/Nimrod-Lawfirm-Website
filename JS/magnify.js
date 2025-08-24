// Initialize magnifying glass for all images
function initMagnifier() {
  const containers = document.querySelectorAll(".proof-image-wrap");

  containers.forEach((container) => {
    const img = container.querySelector(".magnifiable");
    const magnifier = container.querySelector(".magnifier");

    // Mouse enter - show magnifier
    img.addEventListener("mouseenter", function (e) {
      showMagnifier(this, magnifier);
    });

    // Mouse move - update magnifier position and zoom
    img.addEventListener("mousemove", function (e) {
      magnify(this, magnifier, e);
    });

    // Mouse leave - hide magnifier
    img.addEventListener("mouseleave", function (e) {
      hideMagnifier(this, magnifier);
    });
  });
}

function showMagnifier(img, magnifier) {
  magnifier.style.display = "block";

  // Set the background image of magnifier to the same as the img
  magnifier.style.backgroundImage = `url('${img.src}')`;

  // Calculate zoom level (2x zoom)
  const zoomLevel = 2;
  magnifier.style.backgroundSize = `${img.offsetWidth * zoomLevel}px ${
    img.offsetHeight * zoomLevel
  }px`;
}

function magnify(img, magnifier, e) {
  const rect = img.getBoundingClientRect();
  const zoomLevel = 2;

  // Calculate mouse position relative to image
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Position magnifier centered on cursor
  const magnifierSize = 150;
  magnifier.style.left = `${x - magnifierSize / 2}px`;
  magnifier.style.top = `${y - magnifierSize / 2}px`;

  // Calculate background position for zoom effect
  const bgX = -(x * zoomLevel - magnifierSize / 2);
  const bgY = -(y * zoomLevel - magnifierSize / 2);

  magnifier.style.backgroundPosition = `${bgX}px ${bgY}px`;
}

function hideMagnifier(img, magnifier) {
  magnifier.style.display = "none";
}

// Alternative method using event delegation
function initMagnifierDelegation() {
  document.addEventListener("mousemove", function (e) {
    if (e.target.classList.contains("magnifiable")) {
      const container = e.target.closest(".container");
      const magnifier = container.querySelector(".magnifier");
      magnify(e.target, magnifier, e);
    }
  });

  document.addEventListener(
    "mouseenter",
    function (e) {
      if (e.target.classList.contains("magnifiable")) {
        const container = e.target.closest(".container");
        const magnifier = container.querySelector(".magnifier");
        showMagnifier(e.target, magnifier);
      }
    },
    true
  );

  document.addEventListener(
    "mouseleave",
    function (e) {
      if (e.target.classList.contains("magnifiable")) {
        const container = e.target.closest(".container");
        const magnifier = container.querySelector(".magnifier");
        hideMagnifier(e.target, magnifier);
      }
    },
    true
  );
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initMagnifier(); // Use direct event listeners
  // initMagnifierDelegation(); // Alternative: use event delegation
});
