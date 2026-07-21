/**
 *  Coordinates the mentorship-request workflow.
 
 * - Create mentorship requests.
 * - Edit pending requests.
 * - Delete pending requests.

 * - View available and assigned requests.
 * - Accept or reject pending requests.
 * - Schedule accepted requests.
 * - Complete assigned mentorships.
 */
import {
  confirmAction,
  promptEditRequest,
  toast
} from "../utils/alerts.js";

// Coordinates mentorship request operations for coders and mentors.
// Coordina las operaciones de solicitudes de mentoría para Coders y Mentores.
export class MentorshipController {
  constructor({ api, router, view, user }) {
    // Servicio utilizado para comunicarse con la API.
    this.api = api;

    // Router utilizado para cambiar de pantalla.
    this.router = router;

    // Vista correspondiente al Coder o Mentor.
    this.view = view;

    // Usuario autenticado.
    this.user = user;

    // Solicitudes cargadas desde PostgreSQL a través de la API.
    this.requests = [];
  }

  async init() {
    // Dibuja el dashboard según el usuario autenticado.
    this.view.render(this.user);

    // Conecta los eventos de la vista con los métodos del controlador.
    this.view.bindEvents({
      onCreate: (data) => this.createRequest(data),

      onEdit: (id) => this.editRequest(id),

      onDelete: (id) => this.deleteRequest(id),

      onStatusChange: (id, data) =>
        this.changeStatus(id, data),

      onLogout: () => this.logout()
    });

    // Carga las solicitudes al abrir el dashboard.
    await this.loadRequests();
  }

  async loadRequests() {
    try {
      // GET /api/mentorships
      const response = await this.api.get(
        "/mentorships"
      );

      // Guarda temporalmente las solicitudes en el controlador.
      this.requests = response.data;

      // Envía las solicitudes a la vista para mostrarlas.
      this.view.renderRequests(
        this.requests
      );
    } catch (error) {
      this.view.showMessage(
        error.message,
        "error"
      );
    }
  }

  async createRequest(data) {
    // Desactiva temporalmente el botón de creación.
    // El ?. evita errores si la vista no tiene este método.
    this.view.setCreating?.(true);

    try {
      // POST /api/mentorships
      const response = await this.api.post(
        "/mentorships",
        data
      );

      // Muestra el mensaje enviado por el backend.
      this.view.showMessage(
        response.message
      );

      toast(
        response.message || "Request submitted successfully.",
        "success"
      );

      // Limpia el formulario después de crear la solicitud.
      this.view.resetForm?.();

      // Consulta nuevamente las solicitudes actualizadas.
      await this.loadRequests();
    } catch (error) {
      this.view.showMessage(
        error.message,
        "error"
      );

      toast(error.message, "error");
    } finally {
      // Reactiva el botón aunque la operación falle.
      this.view.setCreating?.(false);
    }
  }

  async editRequest(id) {
    // Busca la solicitud dentro de las solicitudes cargadas.
    const request = this.requests.find(
      (item) => item.id === id
    );

    if (!request) {
      return;
    }

    // Muestra un único modal temático con ambos campos en lugar de
    // dos window.prompt() consecutivos.
    const edited = await promptEditRequest({
      topic: request.topic,
      description: request.description
    });

    // El usuario presionó cancelar.
    if (!edited) {
      return;
    }

    try {
      // PATCH /api/mentorships/:id
      const response = await this.api.patch(
        `/mentorships/${id}`,
        edited
      );

      this.view.showMessage(
        response.message
      );

      toast(
        response.message || "Request updated successfully.",
        "success"
      );

      await this.loadRequests();
    } catch (error) {
      this.view.showMessage(
        error.message,
        "error"
      );

      toast(error.message, "error");
    }
  }

  async deleteRequest(id) {
    const confirmed = await confirmAction({
      title: "Delete this request?",
      text: "This pending mentorship request will be permanently deleted.",
      confirmButtonText: "Yes, delete it",
      danger: true
    });

    if (!confirmed) {
      return;
    }

    try {
      // DELETE /api/mentorships/:id
      const response = await this.api.delete(
        `/mentorships/${id}`
      );

      this.view.showMessage(
        response.message
      );

      toast(
        response.message || "Request deleted successfully.",
        "success"
      );

      await this.loadRequests();
    } catch (error) {
      this.view.showMessage(
        error.message,
        "error"
      );

      toast(error.message, "error");
    }
  }

  async changeStatus(id, data) {
    try {
      // PATCH /api/mentorships/:id
      //
      // data puede contener:
      // {
      //   status: "ACCEPTED",
      //   scheduledAt: "...",
      //   observations: "..."
      // }
      const response = await this.api.patch(
        `/mentorships/${id}`,
        data
      );

      this.view.showMessage(
        response.message
      );

      toast(
        response.message || "Request updated successfully.",
        "success"
      );

      await this.loadRequests();
    } catch (error) {
      this.view.showMessage(
        error.message,
        "error"
      );

      toast(error.message, "error");
    }
  }

  async logout() {
    const confirmed = await confirmAction({
      title: "Log out?",
      text: "You will need to sign in again to access your dashboard.",
      confirmButtonText: "Yes, log out",
      danger: true
    });

    if (!confirmed) {
      return;
    }

    try {
      // POST /api/auth/logout
      await this.api.post(
        "/auth/logout"
      );
    } finally {
      toast("You have been logged out.", "success");

      // Regresa al login incluso si ocurre un error al cerrar sesión.
      this.router.navigate(
        "/login"
      );
    }
  }
}