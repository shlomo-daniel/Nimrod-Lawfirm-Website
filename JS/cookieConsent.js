document.addEventListener("DOMContentLoaded", () => {
  const CONSENT_KEY = "cookieConsent";
  const YEAR_MS = 365 * 24 * 60 * 60 * 1000;

  // check if consent is still valid (less than 1 year old)
  const consentTimestamp = localStorage.getItem(CONSENT_KEY);
  if (consentTimestamp && Date.now() - Number(consentTimestamp) < YEAR_MS) {
    return;
  }

  // detect path prefix for privacy link
  const isSubpage = window.location.pathname.includes("/pages/");
  const privacyPath = isSubpage
    ? "./privacy_statement.html"
    : "./pages/privacy_statement.html";

  // build banner HTML
  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "banner");
  banner.setAttribute("aria-label", "הודעת עוגיות");
  banner.innerHTML = `
    <div class="cookie-banner__inner">
      <p class="cookie-banner__text">
        אתר זה משתמש בעוגיות. המשך גלישה מהווה הסכמה. <a href="${privacyPath}">מדיניות פרטיות</a>
      </p>
      <button class="cookie-banner__btn" type="button">הבנתי</button>
    </div>
  `;

  // show banner after 5 seconds
  setTimeout(() => {
    document.body.appendChild(banner);

    // dismiss handler
    banner.querySelector(".cookie-banner__btn").addEventListener("click", () => {
      banner.classList.add("cookie-banner--hiding");
      banner.addEventListener(
        "animationend",
        () => {
          banner.remove();
        },
        { once: true },
      );
      localStorage.setItem(CONSENT_KEY, String(Date.now()));
    });
  }, 5000);
});
