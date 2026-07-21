/**
 * Provides reusable SweetAlert2 dialogs and notifications.
 * - Apply theme-aware alert options.
 * - Display confirmation dialogs.
 * - Display toast notifications.
 * - Collect request-edit information.
 * - Escape user-controlled values inserted into dialog HTML.
 */
import Swal from "sweetalert2";

import { getCurrentTheme } from "./theme.js";

const PALETTE = {
  primary: "#2563eb",
  primaryDark: "#1648c7",
  danger: "#b42318",
  success: "#11643a"
};

function themedOptions(extra = {}) {
  const isDark = getCurrentTheme() === "dark";

  return {
    background: isDark ? "#131b3a" : "#ffffff",
    color: isDark ? "#e7ecff" : "#172033",
    confirmButtonColor: PALETTE.primary,
    cancelButtonColor: isDark ? "#3a4577" : "#94a3c4",
    customClass: {
      popup: "mentor-swal-popup",
      confirmButton: "mentor-swal-confirm",
      cancelButton: "mentor-swal-cancel"
    },
    ...extra
  };
}

// Generic confirmation dialog. Used for logout, delete and any other
// action that should not happen accidentally.
export async function confirmAction({
  title,
  text,
  confirmButtonText = "Yes, continue",
  cancelButtonText = "Cancel",
  danger = false
}) {
  const result = await Swal.fire(
    themedOptions({
      title,
      text,
      icon: danger ? "warning" : "question",
      iconColor: danger ? PALETTE.danger : PALETTE.primary,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      confirmButtonColor: danger
        ? PALETTE.danger
        : PALETTE.primary,
      reverseButtons: true,
      focusCancel: true
    })
  );

  return result.isConfirmed;
}

// Non-blocking toast for success / error feedback, matching the app palette.
export function toast(message, type = "success") {
  const isDark = getCurrentTheme() === "dark";

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3200,
    timerProgressBar: true,
    background: isDark ? "#131b3a" : "#ffffff",
    color: isDark ? "#e7ecff" : "#172033",
    iconColor:
      type === "error" ? PALETTE.danger : PALETTE.success,
    customClass: {
      popup: "mentor-swal-toast"
    },
    didOpen: (el) => {
      el.addEventListener("mouseenter", Swal.stopTimer);
      el.addEventListener("mouseleave", Swal.resumeTimer);
    }
  });

  Toast.fire({
    icon: type === "error" ? "error" : "success",
    title: message
  });
}

// Modal form used to edit a mentorship request's topic and description
// in a single, themed step (replaces the old double window.prompt flow).
export async function promptEditRequest({
  topic,
  description
}) {
  const result = await Swal.fire(
    themedOptions({
      title: "Edit mentorship request",
      html: `
        <div class="mentor-swal-form">
          <label class="mentor-swal-label" for="swal-edit-topic">Topic</label>
          <input
            id="swal-edit-topic"
            class="swal2-input mentor-swal-input"
            maxlength="150"
            value="${escapeAttribute(topic)}"
          />

          <label class="mentor-swal-label" for="swal-edit-description">Description</label>
          <textarea
            id="swal-edit-description"
            class="swal2-textarea mentor-swal-input"
            rows="4"
          >${escapeHtml(description)}</textarea>
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save changes",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      preConfirm: () => {
        const newTopic = document
          .getElementById("swal-edit-topic")
          .value.trim();

        const newDescription = document
          .getElementById("swal-edit-description")
          .value.trim();

        if (!newTopic || !newDescription) {
          Swal.showValidationMessage(
            "Topic and description are required."
          );

          return false;
        }

        return {
          topic: newTopic,
          description: newDescription
        };
      }
    })
  );

  if (!result.isConfirmed) {
    return null;
  }

  return result.value;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;");
}
