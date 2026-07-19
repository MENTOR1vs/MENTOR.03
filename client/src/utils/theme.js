const STORAGE_KEY = "mentor-theme";
function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === "dark" || saved === "light") {
    return saved;
  }

  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)"
  ).matches;

  return prefersDark ? "dark" : "light";
}

// Applies the theme attribute on <html> so CSS variables can react to it.
// Aplica el atributo de tema en <html> para que las variables CSS reaccionen.
export function applyTheme(theme) {
  document.documentElement.setAttribute(
    "data-theme",
    theme
  );
}

// Reads the theme currently in effect.
export function getCurrentTheme() {
  return (
    document.documentElement.getAttribute("data-theme") ||
    "light"
  );
}

// Runs once when the app boots to set the initial theme.
export function initTheme() {
  applyTheme(getPreferredTheme());
}

// Switches between light and dark and persists the choice.
export function toggleTheme() {
  const next =
    getCurrentTheme() === "dark" ? "light" : "dark";

  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);

  return next;
}

// Returns markup for the dark mode toggle used in every sidebar.
// Every view injects this inside its "settings" area next to logout.
export function themeToggleTemplate() {
  const isDark = getCurrentTheme() === "dark";

  return `
    <div class="settings-block">
      <span class="settings-label">Settings</span>

      <button
        id="theme-toggle-button"
        class="theme-toggle"
        type="button"
        role="switch"
        aria-checked="${isDark}"
        aria-label="Toggle dark mode"
      >
        <span class="theme-toggle-icon">${isDark ? "🌙" : "☀️"}</span>
        <span class="theme-toggle-text">${isDark ? "Dark mode" : "Light mode"}</span>
        <span class="theme-toggle-track">
          <span class="theme-toggle-thumb"></span>
        </span>
      </button>
    </div>
  `;
}

// Binds the toggle button rendered by themeToggleTemplate().
export function bindThemeToggle(root) {
  const button = root.querySelector(
    "#theme-toggle-button"
  );

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    const next = toggleTheme();

    button.setAttribute(
      "aria-checked",
      String(next === "dark")
    );

    button.querySelector(
      ".theme-toggle-icon"
    ).textContent = next === "dark" ? "🌙" : "☀️";

    button.querySelector(
      ".theme-toggle-text"
    ).textContent =
      next === "dark" ? "Dark mode" : "Light mode";
  });
}
