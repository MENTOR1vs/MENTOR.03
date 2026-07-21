/**
 *  Coordinates the read-only administrative dashboard.
 * - Render the Administrator screen.
 * - Load the platform overview.
 * - Refresh administrative information.
 * - End the authenticated session.
 *
 * Collaborates with:
 * - AdminDashboardView
 * - ApiService
 * - AppRouter
 * - alerts.js
 */
import { confirmAction, toast } from "../utils/alerts.js";

export class AdminController {
  constructor({ api, router, view, user }) {
    this.api = api;
    this.router = router;
    this.view = view;
    this.user = user;
  }

  async init() {
    this.view.render(this.user);

    this.view.bindEvents({
      onRefresh: () => this.loadOverview(),
      onLogout: () => this.logout()
    });

    await this.loadOverview();
  }

  async loadOverview() {
    this.view.clearMessage();

    try {
      const response = await this.api.get(
        "/admin/overview"
      );

      this.view.renderOverview(
        response.data
      );
    } catch (error) {
      this.view.showMessage(
        error.message,
        "error"
      );
    }
  }

  async logout() {
    const confirmed = await confirmAction({
      title: "Log out?",
      text: "You will need to sign in again to access the admin dashboard.",
      confirmButtonText: "Yes, log out",
      danger: true
    });

    if (!confirmed) {
      return;
    }

    try {
      await this.api.post(
        "/auth/logout"
      );
    } catch (error) {
      console.error(
        "Logout error:",
        error
      );
    } finally {
      toast("You have been logged out.", "success");
      this.router.navigate(
        "/login"
      );
    }
  }
}