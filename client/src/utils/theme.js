// Theme + accent-color engine. Preferences are namespaced per signed-in
// user (mentor-theme:<userId> / mentor-accent:<userId>) so switching
// accounts on the same browser never leaks one user's settings to another.

/**
 * Manages visual preferences for authenticated users.
 *
 * Supported preferences:
 * - Light theme.
 * - Dark theme.
 * - Custom accent color.
 *
 * Preferences are stored in localStorage using the active user ID,
 * preventing one account from overwriting another account's settings.
 */
import { toast } from "./alerts.js";

const DEFAULT_ACCENT = "#2563eb";
let activeUserId = null;

// Called by the router right after the session is resolved on every render.
export function setActiveUser(userId) {
  activeUserId = userId || null;
}

function themeKey() {
  return `mentor-theme:${activeUserId || "guest"}`;
}

function accentKey() {
  return `mentor-accent:${activeUserId || "guest"}`;
}

function getPreferredTheme() {
  const saved = localStorage.getItem(themeKey());
  if (saved === "dark" || saved === "light") return saved;

  return "light";
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

// --- Accent color -----------------------------------------------------
// Only touches the blue/accent tokens (buttons, links, active states,
// switches, the CODER badge). Neutrals and success/error/warning colors
// are defined separately in styles.css and are never affected.

function clamp(value) {
  return Math.min(255, Math.max(0, value));
}

function mix(hex, target, amount) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);

  const t = target === "black" ? 0 : 255;

  const mixed = [r, g, b].map((channel) =>
    clamp(Math.round(channel + (t - channel) * amount))
  );

  return `#${mixed.map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}

export function applyAccentColor(hex) {
  if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return;

  const root = document.documentElement.style;
  root.setProperty("--color-accent", hex);
  root.setProperty("--color-accent-strong", mix(hex, "black", 0.18));
  root.setProperty("--color-accent-soft", mix(hex, "white", 0.86));
}

export function resetAccentColor() {
  document.documentElement.style.removeProperty("--color-accent");
  document.documentElement.style.removeProperty("--color-accent-strong");
  document.documentElement.style.removeProperty("--color-accent-soft");
}

export function getSavedAccentColor() {
  return localStorage.getItem(accentKey()) || DEFAULT_ACCENT;
}

export function saveAccentColor(hex) {
  localStorage.setItem(accentKey(), hex);
  applyAccentColor(hex);
}

export function resetSavedAccentColor() {
  localStorage.removeItem(accentKey());
  resetAccentColor();
}

// Applies the signed-in user's stored theme + accent. Call once per
// authenticated render (router does this). Login/landing never call this —
// they are always forced to the light corporate palette via CSS.
export function applyUserPreferences() {
  applyTheme(getPreferredTheme());

  const savedAccent = localStorage.getItem(accentKey());
  if (savedAccent) applyAccentColor(savedAccent);
  else resetAccentColor();
}

// Runs once when the app boots, before we know who is signed in.
export function initTheme() {
  applyTheme(getPreferredTheme());
}

export function toggleTheme() {
  const next = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(themeKey(), next);
  return next;
}

// Returns markup for the dark mode toggle used in every sidebar.
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

export function bindThemeToggle(root) {
  const button = root.querySelector("#theme-toggle-button");
  if (!button) return;

  button.addEventListener("click", () => {
    const next = toggleTheme();

    button.setAttribute("aria-checked", String(next === "dark"));
    button.querySelector(".theme-toggle-icon").textContent = next === "dark" ? "🌙" : "☀️";
    button.querySelector(".theme-toggle-text").textContent = next === "dark" ? "Dark mode" : "Light mode";
  });
}

// --- Appearance panel (used inside Profile) ----------------------------

export function appearanceTemplate() {
  const current = getSavedAccentColor();

  return `
    <section class="panel-card appearance-card">
      <div class="section-heading">
        <div>
          <h3>Appearance</h3>
          <p class="card-description">Personalize the accent color used across buttons, links and active states.</p>
        </div>
      </div>

      <div class="appearance-row">
        <label for="accent-color-input" class="appearance-label">Accent color</label>

        <div class="appearance-controls">
          <input id="accent-color-input" type="color" value="${current}" />
          <span id="accent-color-preview" class="appearance-preview" style="background:${current}"></span>
          <code id="accent-color-code">${current}</code>
        </div>

        <div class="appearance-actions">
          <button id="accent-save-button" class="primary-button inline-button" type="button">Save</button>
          <button id="accent-reset-button" class="secondary-button inline-button" type="button">Reset</button>
        </div>
      </div>
    </section>
  `;
}

export function bindAppearance(root) {
  const input = root.querySelector("#accent-color-input");
  const preview = root.querySelector("#accent-color-preview");
  const code = root.querySelector("#accent-color-code");
  const saveButton = root.querySelector("#accent-save-button");
  const resetButton = root.querySelector("#accent-reset-button");

  if (!input) return;

  input.addEventListener("input", () => {
    preview.style.background = input.value;
    code.textContent = input.value;
    applyAccentColor(input.value);
  });

  saveButton.addEventListener("click", () => {
    saveAccentColor(input.value);
    toast("Accent color saved.", "success");
  });

  resetButton.addEventListener("click", () => {
    resetSavedAccentColor();
    input.value = DEFAULT_ACCENT;
    preview.style.background = DEFAULT_ACCENT;
    code.textContent = DEFAULT_ACCENT;
    toast("Accent color reset to default.", "success");
  });
}
