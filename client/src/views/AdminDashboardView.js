/**
 *  Renders the read-only administrative overview.

 * - Display summary metrics.
 * - Display registered users and their roles.
 * - Display Mentors and their assigned requests.
 * - Display the complete mentorship-request history.
 * - Provide refresh, profile, appearance, and logout controls.
 *
 */
import { themeToggleTemplate, bindThemeToggle } from "../utils/theme.js";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) {
    return "Not available";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }

  return new Intl.DateTimeFormat(
    "en-US",
    {
      dateStyle: "medium",
      timeStyle: "short"
    }
  ).format(date);
}

function getUserFirstName(user) {
  return (
    user.firstName ||
    user.first_name ||
    ""
  );
}

function getUserLastName(user) {
  return (
    user.lastName ||
    user.last_name ||
    ""
  );
}

export class AdminDashboardView {
  constructor(root) {
    this.root = root;
  }

  render(user) {
    const firstName =
      getUserFirstName(user);

    const lastName =
      getUserLastName(user);

    this.root.innerHTML = `
      <div class="dashboard-layout">
        <aside class="sidebar">
          <div>
            <p class="eyebrow">
              ADMINISTRATION
            </p>

            <h1>MENTOR</h1>
          </div>

          <nav class="sidebar-nav">
            <a
              class="nav-link active"
              href="#/admin"
            >
              Admin Dashboard
            </a>

            <a
              class="nav-link"
              href="#/profile"
            >
              My Profile
            </a>
          </nav>

          <div class="sidebar-user">
            <strong>
              ${escapeHtml(firstName)}
              ${escapeHtml(lastName)}
            </strong>

            <span>
              Administrator
            </span>

            ${themeToggleTemplate()}

            <button
              id="admin-logout-button"
              class="text-button"
              type="button"
            >
              Log Out
            </button>
          </div>
        </aside>

        <main class="dashboard-main admin-main">
          <header class="dashboard-header">
            <div>
              <p class="eyebrow">
               DASHBOARD
              </p>

              <h2>
                MENTOR Platform Overview
              </h2>

              <p>
                Review registered users,
                Mentors, and mentorship
                requests.
              </p>
            </div>

            <button
              id="admin-refresh-button"
              class="secondary-button"
              type="button"
            >
              Refresh Data
            </button>
          </header>

          <div
            id="admin-message"
            class="message hidden"
            aria-live="polite"
          ></div>

          <div id="admin-content">
            <div class="empty-state">
              <strong>
                Loading Information
              </strong>

              <p>
                Please wait while the
                platform data is being
                retrieved.
              </p>
            </div>
          </div>
        </main>
      </div>
    `;
  }

  bindEvents({
    onRefresh,
    onLogout
  }) {
    const refreshButton =
      this.root.querySelector(
        "#admin-refresh-button"
      );

    const logoutButton =
      this.root.querySelector(
        "#admin-logout-button"
      );

    refreshButton?.addEventListener(
      "click",
      onRefresh
    );

    logoutButton?.addEventListener(
      "click",
      onLogout
    );

    bindThemeToggle(this.root);
  }

  renderOverview(data) {
    const content =
      this.root.querySelector(
        "#admin-content"
      );

    if (!content) {
      return;
    }

    const summary =
      data?.summary || {};

    const users =
      Array.isArray(data?.users)
        ? data.users
        : [];

    const mentors =
      Array.isArray(data?.mentors)
        ? data.mentors
        : [];

    const requests =
      Array.isArray(data?.requests)
        ? data.requests
        : [];

    content.innerHTML = `
      ${this.renderSummary(summary)}

      <section class="admin-section">
        <div class="section-heading">
          <div>
            <h3>
              Registered Users
            </h3>

            <p>
              Coders, Mentors, and
              Administrators.
            </p>
          </div>
        </div>

        <div class="admin-user-grid">
          ${
            users.length > 0
              ? users
                  .map(
                    (user) =>
                      this.renderUser(user)
                  )
                  .join("")
              : this.renderEmpty(
                  "There are no registered users."
                )
          }
        </div>
      </section>

      <section class="admin-section">
        <div class="section-heading">
          <div>
            <h3>
              Registered Mentors
            </h3>

            <p>
              Mentor directory and
              assigned mentorship
              requests.
            </p>
          </div>
        </div>

        <div class="admin-mentor-grid">
          ${
            mentors.length > 0
              ? mentors
                  .map(
                    (mentor) =>
                      this.renderMentor(
                        mentor
                      )
                  )
                  .join("")
              : this.renderEmpty(
                  "There are no registered Mentors."
                )
          }
        </div>
      </section>

      <section class="admin-section">
        <div class="section-heading">
          <div>
            <h3>
              All Mentorship Requests
            </h3>

            <p>
              Complete history of
              mentorship requests.
            </p>
          </div>
        </div>

        <div class="card-list">
          ${
            requests.length > 0
              ? requests
                  .map(
                    (request) =>
                      this.renderRequest(
                        request
                      )
                  )
                  .join("")
              : this.renderEmpty(
                  "There are no mentorship requests."
                )
          }
        </div>
      </section>
    `;
  }

  renderSummary(summary) {
    const statuses =
      summary.statusTotals || {};

    return `
      <section class="admin-summary-grid">
        ${this.renderMetric(
          "Users",
          summary.totalUsers
        )}

        ${this.renderMetric(
          "Coders",
          summary.totalCoders
        )}

        ${this.renderMetric(
          "Mentors",
          summary.totalMentors
        )}

        ${this.renderMetric(
          "Administrators",
          summary.totalAdmins
        )}

        ${this.renderMetric(
          "Requests",
          summary.totalRequests
        )}

        ${this.renderMetric(
          "Pending",
          statuses.PENDING || 0
        )}
      </section>
    `;
  }

  renderMetric(label, value) {
    return `
      <article class="admin-metric-card">
        <span>
          ${escapeHtml(label)}
        </span>

        <strong>
          ${Number(value) || 0}
        </strong>
      </article>
    `;
  }

  renderUser(user) {
    const firstName =
      getUserFirstName(user);

    const lastName =
      getUserLastName(user);

    const role =
      user.role || "NO ROLE";

    const clan =
      user.clanName ||
      user.clan_name ||
      "Not applicable";

    const createdRequests =
      Array.isArray(
        user.createdRequests
      )
        ? user.createdRequests
        : [];

    const assignedRequests =
      Array.isArray(
        user.assignedRequests
      )
        ? user.assignedRequests
        : [];

    const relatedRequests =
      role === "CODER"
        ? createdRequests
        : assignedRequests;

    return `
      <article class="admin-user-card">
        <div class="admin-user-header">
          <div>
            <span
              class="
                admin-role
                admin-role-${escapeHtml(
                  role.toLowerCase()
                )}
              "
            >
              ${escapeHtml(role)}
            </span>

            <h4>
              ${escapeHtml(firstName)}
              ${escapeHtml(lastName)}
            </h4>

            <p>
              ${escapeHtml(user.email)}
            </p>
          </div>

          <span class="admin-count">
            ${relatedRequests.length}
          </span>
        </div>

        <dl class="admin-user-details">
          <div>
            <dt>Clan</dt>

            <dd>
              ${escapeHtml(clan)}
            </dd>
          </div>

          <div>
            <dt>Registered On</dt>

            <dd>
              ${formatDate(
                user.createdAt ||
                user.created_at
              )}
            </dd>
          </div>
        </dl>

        <div class="admin-user-requests">
          <strong>
            ${
              role === "CODER"
                ? "Created Requests"
                : "Assigned Requests"
            }
          </strong>

          ${
            relatedRequests.length > 0
              ? relatedRequests
                  .map(
                    (request) => `
                      <div class="admin-compact-request">
                        <div>
                          <strong>
                            ${escapeHtml(
                              request.topic
                            )}
                          </strong>

                          <small>
                            ${escapeHtml(
                              request.status
                            )}
                          </small>
                        </div>
                      </div>
                    `
                  )
                  .join("")
              : `
                  <p class="admin-muted">
                    No related mentorship requests.
                  </p>
                `
          }
        </div>
      </article>
    `;
  }

  renderMentor(mentor) {
    const firstName =
      getUserFirstName(mentor);

    const lastName =
      getUserLastName(mentor);

    const requestCount =
      mentor.assignedRequestCount ??
      mentor.assignedRequests?.length ??
      0;

    return `
      <article class="admin-mentor-card">
        <span
          class="
            admin-role
            admin-role-mentor
          "
        >
          MENTOR
        </span>

        <h4>
          ${escapeHtml(firstName)}
          ${escapeHtml(lastName)}
        </h4>

        <p>
          ${escapeHtml(mentor.email)}
        </p>

        <dl class="admin-user-details">
          <div>
            <dt>
              Assigned Requests
            </dt>

            <dd>
              ${requestCount}
            </dd>
          </div>

          <div>
            <dt>Registered On</dt>

            <dd>
              ${formatDate(
                mentor.createdAt ||
                mentor.created_at
              )}
            </dd>
          </div>
        </dl>
      </article>
    `;
  }

  renderRequest(request) {
    const coder =
      request.coder || {};

    const mentor =
      request.mentor || null;

    return `
      <article class="request-card">
        <div class="request-card-header">
          <div>
            <p class="request-owner">
              ${escapeHtml(
                coder.name ||
                "Coder not available"
              )}

              ·

              ${escapeHtml(
                coder.clan ||
                "No clan"
              )}
            </p>

            <h4>
              ${escapeHtml(request.topic)}
            </h4>

            <p>
              ${escapeHtml(
                request.description
              )}
            </p>
          </div>

          <span
            class="
              status-badge
              status-${escapeHtml(
                String(
                  request.status
                ).toLowerCase()
              )}
            "
          >
            ${escapeHtml(request.status)}
          </span>
        </div>

        <dl
          class="
            request-details
            admin-request-details
          "
        >
          <div>
            <dt>Coder Email</dt>

            <dd>
              ${escapeHtml(
                coder.email ||
                "Not available"
              )}
            </dd>
          </div>

          <div>
            <dt>Assigned Mentor</dt>

            <dd>
              ${escapeHtml(
                mentor?.name ||
                "Not assigned"
              )}
            </dd>
          </div>

          <div>
            <dt>Mentor Email</dt>

            <dd>
              ${escapeHtml(
                mentor?.email ||
                "Not assigned"
              )}
            </dd>
          </div>

          <div>
            <dt>Scheduled Date</dt>

            <dd>
              ${formatDate(
                request.scheduledAt ||
                request.scheduled_at
              )}
            </dd>
          </div>

          <div>
            <dt>Created On</dt>

            <dd>
              ${formatDate(
                request.createdAt ||
                request.created_at
              )}
            </dd>
          </div>

          <div>
            <dt>Observations</dt>

            <dd>
              ${escapeHtml(
                request.observations ||
                "No observations"
              )}
            </dd>
          </div>
        </dl>
      </article>
    `;
  }

  renderEmpty(message) {
    return `
      <div class="empty-state">
        <p>
          ${escapeHtml(message)}
        </p>
      </div>
    `;
  }

  showMessage(
    message,
    type = "error"
  ) {
    const box =
      this.root.querySelector(
        "#admin-message"
      );

    if (!box) {
      return;
    }

    box.textContent =
      message;

    box.className =
      `message message-${type}`;
  }

  clearMessage() {
    const box =
      this.root.querySelector(
        "#admin-message"
      );

    if (!box) {
      return;
    }

    box.textContent = "";
    box.className = "message hidden";
  }
}