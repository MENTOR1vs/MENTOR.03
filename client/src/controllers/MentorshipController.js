import { 
  showConfirmationAlert, 
  showTextInputAlert, 
  showAcceptAlert, 
  showRejectAlert, 
  showCompleteAlert 
} from '../components/alerts.js';

export class MentorshipController {
  constructor({ api, router, view, user }) {
    this.api = api;
    this.router = router;
    this.view = view;
    this.user = user;
    this.requests = [];
  }

  async init() {
    this.view.render(this.user);
    this.view.bindEvents({
      onCreate: (data) => this.createRequest(data),
      onEdit: (id) => this.editRequest(id),
      onDelete: (id) => this.deleteRequest(id),
      onStatusChange: (id, data) => this.changeStatus(id, data),
      onLogout: () => this.logout()
    });

    await this.loadRequests();
  }

  async loadRequests() {
    try {
      const response = await this.api.get("/mentorships");
      this.requests = response.data;
      this.view.renderRequests(this.requests);
    } catch (error) {
      this.view.showMessage(error.message, "error");
    }
  }

  async createRequest(data) {
    this.view.setCreating?.(true);

    try {
      const response = await this.api.post("/mentorships", data);
      this.view.showMessage(response.message);
      this.view.resetForm?.();
      await this.loadRequests();
    } catch (error) {
      this.view.showMessage(error.message, "error");
    } finally {
      this.view.setCreating?.(false);
    }
  }

  async editRequest(id) {
    const request = this.requests.find((item) => item.id === id);

    if (!request) return;

    const confirmed = await showConfirmationAlert({
      title: 'Edit mentorship request',
      text: 'You are about to update the topic and description of this request.'
    });

    if (!confirmed) return;

    const topic = await showTextInputAlert({
      title: 'Edit topic',
      text: 'Update the topic for this mentorship request.',
      inputLabel: 'Topic',
      inputValue: request.topic,
      confirmButtonText: 'Continue'
    });

    if (topic === null) return;

    const description = await showTextInputAlert({
      title: 'Edit description',
      text: 'Update the description for this mentorship request.',
      inputLabel: 'Description',
      inputValue: request.description,
      confirmButtonText: 'Continue'
    });

    if (description === null) return;

    try {
      const response = await this.api.patch(`/mentorships/${id}`, {
        topic,
        description
      });

      this.view.showMessage(response.message);
      await this.loadRequests();
    } catch (error) {
      this.view.showMessage(error.message, "error");
    }
  }

  async deleteRequest(id) {
    const confirmed = await showConfirmationAlert({
      title: 'Delete request',
      text: 'Are you sure you want to delete this mentorship request? This action cannot be undone.'
    });

    if (!confirmed) return;

    try {
      const response = await this.api.delete(`/mentorships/${id}`);
      this.view.showMessage(response.message);
      await this.loadRequests();
    } catch (error) {
      this.view.showMessage(error.message, "error");
    }
  }

  async changeStatus(id, data) {
    const request = this.requests.find((item) => item.id === id);

    if (!request) return;

    let confirmed = true;

    if (data.status === 'ACCEPTED') {
      confirmed = await showAcceptAlert(request.topic, request.coder?.name || 'Coder');
    } else if (data.status === 'REJECTED') {
      confirmed = await showRejectAlert(request.topic);
    } else if (data.status === 'COMPLETED') {
      confirmed = await showCompleteAlert(request.topic);
    }

    if (!confirmed) return;

    try {
      const response = await this.api.patch(`/mentorships/${id}`, data);
      this.view.showMessage(response.message);
      await this.loadRequests();
    } catch (error) {
      this.view.showMessage(error.message, "error");
    }
  }

  async logout() {
    try {
      await this.api.post("/auth/logout");
    } finally {
      this.router.navigate("/login");
    }
  }
}
