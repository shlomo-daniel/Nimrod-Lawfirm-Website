class ModernAccordion {
  constructor(selector) {
    this.accordion = document.querySelector(selector);
    this.items = this.accordion.querySelectorAll(".accordion-item");
    this.init();
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

    // Close all items with smooth animation
    this.items.forEach((item, index) => {
      if (item !== clickedItem) {
        item.classList.remove("active");
        const content = item.querySelector(".accordion-content");
        content.style.maxHeight = "0px";
      }
    });

    // Toggle clicked item
    if (!isActive) {
      clickedItem.classList.add("active");
      const content = clickedItem.querySelector(".accordion-content");
      const scrollHeight = content.scrollHeight;
      content.style.maxHeight = scrollHeight + "px";

      // Add smooth scroll to view if needed
      setTimeout(() => {
        clickedItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 200);
    } else {
      clickedItem.classList.remove("active");
      const content = clickedItem.querySelector(".accordion-content");
      content.style.maxHeight = "0px";
    }
  }
}

// Initialize the accordion when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const accordion = new ModernAccordion(".accordion");
});
