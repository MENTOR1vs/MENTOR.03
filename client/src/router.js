import { AuthView } from "./views/AuthView.js";
import { CoderDashboardView } from "./views/CoderDashboardView.js";
import { MentorDashboardView } from "./views/MentorDashboardView.js";
import { ProfileView } from "./views/ProfileView.js";
import { AdminDashboardView } from "./views/AdminDashboardView.js";
import { LandingView } from "./views/LandingView.js";

import { AuthController } from "./controllers/AuthController.js";
import { MentorshipController } from "./controllers/MentorshipController.js";
import { ProfileController } from "./controllers/ProfileController.js";
import { AdminController } from "./controllers/AdminController.js";

import { setActiveUser,  applyUserPreferences} from "./utils/theme.js";

/**
  Controls navigation in the MENTOR single-page application.
 
 * - Read the current hash route.
 * - Recover the authenticated session.
 * - Protect private routes.
 * - Redirect users according to their role.
 * - Create the correct View and Controller.
 * - Render the not-found screen.
 *
 * Public routes:
 * - /
 * - /login
 * - /register
 *
 * Protected routes:
 * - /coder
 * - /mentor
 * - /admin
 * - /profile
 */
const PUBLIC_ROUTES = new Set([  "/home",  "/login",  "/register"]);

const PROTECTED_ROUTES = new Set([  "/coder",  "/mentor",  "/admin",  "/profile"]);

//Coordinates route resolution and application screen rendering
export class AppRouter {

/**
 * Creates the router.
 *
 * @param {object} dependencies
 * @param {HTMLElement} dependencies.root - Main rendering container.
 * @param {ApiService} dependencies.api - Shared API client.
 */

  constructor({
    root,
    api
  }) {
    this.root = root;
    this.api = api;
    this.currentController = null;
  }
/**
 * Starts listening for hash changes and renders the initial route.
 */
  start() {
    window.addEventListener(
      "hashchange",
      () => this.render()
    );

    /*
     * When the application opens without a hash,
     * the public landing page becomes the initial route.
     */
    if (!window.location.hash) {
      this.navigate("/home");
      return;
    }

    this.render();
  }

  navigate(path) {
    const nextHash = `#${path}`;

    /*
     * Setting the same hash does not trigger hashchange.
     * In that case, render the route directly.
     */
    if (
      window.location.hash ===
      nextHash
    ) {
      this.render();
      return;
    }

    window.location.hash =
      nextHash;
  }

  getDashboardPath(role) {
    const dashboards = {
      CODER: "/coder",
      MENTOR: "/mentor",
      ADMIN: "/admin"
    };

    return (
      dashboards[role] ||
      "/login"
    );
  }

  goToDashboard(role) {
    this.navigate(
      this.getDashboardPath(role)
    );
  }

  async getSession() {
    try {
      const response =
        await this.api.get(
          "/auth/me"
        );

      return response.data;
    } catch {
      return null;
    }
  }

  renderNotFound(user) {
    const returnPath =
      user
        ? this.getDashboardPath(
            user.role
          )
        : "/home";

    const returnLabel =
      user
        ? "Return to dashboard"
        : "Return to home";

    this.currentController =
      null;

    this.root.innerHTML = `
      <section
        class="
          not-found
          ${
            user
              ? ""
              : "theme-light-locked"
          }
        "
      >
        <h1>404</h1>

        <h2>Page not found</h2>

        <p>
          The requested page does not exist.
        </p>

        <a
          class="primary-button inline-button"
          href="#${returnPath}"
        >
          ${returnLabel}
        </a>
      </section>
    `;
  }

  async render() {
    const rawPath =
      window.location.hash
        .slice(1) ||
      "/home";

    /*
     * Removes trailing slashes.
     *
     * Example:
     * /home/ becomes /home
     */
    const path =
      rawPath.length > 1
        ? rawPath.replace(
            /\/+$/,
            ""
          )
        : rawPath;

    const user =
      await this.getSession();

    setActiveUser(
      user
        ? user.id
        : null
    );

    /*
     * Keeps old links such as "#/" working.
     * The canonical landing route is now "#/home".
     */
    if (path === "/") {
      this.navigate("/home");
      return;
    }

    const isPublicRoute =
      PUBLIC_ROUTES.has(path);

    const isProtectedRoute =
      PROTECTED_ROUTES.has(path);

    /*
     * The 404 validation must happen before
     * redirecting unauthenticated users.
     *
     * This allows a visitor without a session
     * to see the 404 page.
     */
    if (
      !isPublicRoute &&
      !isProtectedRoute
    ) {
      if (user) {
        applyUserPreferences();
      }

      this.renderNotFound(user);
      return;
    }

    /*
     * PUBLIC LANDING PAGE
     */
    if (path === "/home") {
      if (user) {
        this.goToDashboard(
          user.role
        );

        return;
      }

      this.currentController =
        null;

      const view =
        new LandingView(
          this.root
        );

      view.render();
      view.bindEvents();

      return;
    }

    /*
     * LOGIN AND REGISTRATION
     */
    if (
      path === "/login" ||
      path === "/register"
    ) {
      if (user) {
        this.goToDashboard(
          user.role
        );

        return;
      }

      const view =
        new AuthView(
          this.root
        );

      this.currentController =
        new AuthController({
          api: this.api,
          router: this,
          view,

          initialTab:
            path === "/register"
              ? "register"
              : "login"
        });

      await this
        .currentController
        .init();

      return;
    }

    /*
     * All remaining known routes are protected.
     */
    if (!user) {
      this.navigate("/login");
      return;
    }

    applyUserPreferences();

    /*
     * CODER DASHBOARD
     */
    if (path === "/coder") {
      if (
        user.role !== "CODER"
      ) {
        this.goToDashboard(
          user.role
        );

        return;
      }

      const view =
        new CoderDashboardView(
          this.root
        );

      this.currentController =
        new MentorshipController({
          api: this.api,
          router: this,
          view,
          user
        });

      await this
        .currentController
        .init();

      return;
    }

    /*
     * MENTOR DASHBOARD
     */
    if (path === "/mentor") {
      if (
        user.role !== "MENTOR"
      ) {
        this.goToDashboard(
          user.role
        );

        return;
      }

      const view =
        new MentorDashboardView(
          this.root
        );

      this.currentController =
        new MentorshipController({
          api: this.api,
          router: this,
          view,
          user
        });

      await this
        .currentController
        .init();

      return;
    }

    /*
     * ADMIN DASHBOARD
     */
    if (path === "/admin") {
      if (
        user.role !== "ADMIN"
      ) {
        this.goToDashboard(
          user.role
        );

        return;
      }

      const view =
        new AdminDashboardView(
          this.root
        );

      this.currentController =
        new AdminController({
          api: this.api,
          router: this,
          view,
          user
        });

      await this
        .currentController
        .init();

      return;
    }

    /*
     * USER PROFILE
     */
    if (path === "/profile") {
      const view =
        new ProfileView(
          this.root
        );

      this.currentController =
        new ProfileController({
          api: this.api,
          router: this,
          view,
          user
        });

      await this
        .currentController
        .init();
    }
  }
}