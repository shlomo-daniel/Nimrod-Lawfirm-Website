class ModernAccordion {
  constructor(selector) {
    this.accordion = document.querySelector(selector);
    this.items = this.accordion.querySelectorAll(".accordion-item");
    this.isMobile = window.innerWidth <= 768;
    this.init();

    // Listen for resize to update mobile detection
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }

  init() {
    this.items.forEach((item, index) => {
      const header = item.querySelector(".accordion-header");

      header.addEventListener("click", () => {
        this.toggleItem(item, index);
      });

      // Add keyboard support
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggleItem(item, index);
        }
      });
    });
  }

  toggleItem(clickedItem, clickedIndex) {
    const isActive = clickedItem.classList.contains("active");

    // Close all items
    this.items.forEach((item) => {
      if (item !== clickedItem) {
        item.classList.remove("active");
      }
    });

    // Toggle clicked item
    if (!isActive) {
      clickedItem.classList.add("active");

      // Only use smooth scroll on desktop, use immediate scroll on mobile for better performance
      if (!this.isMobile) {
        setTimeout(() => {
          clickedItem.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 150);
      } else {
        // Immediate scroll on mobile with shorter timeout
        setTimeout(() => {
          clickedItem.scrollIntoView({
            behavior: "auto",
            block: "nearest",
          });
        }, 100);
      }
    } else {
      clickedItem.classList.remove("active");
    }
  }
}

// Initialize the accordion when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const accordion = new ModernAccordion(".accordion");
});
