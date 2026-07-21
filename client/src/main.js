// Starts the MENTOR frontend application
import "./styles.css";
import { ApiService } from "./services/ApiService.js";
import { AppRouter } from "./router.js";
import { initTheme } from "./utils/theme.js";

initTheme(); // Applies the initia visual theme before rendering a view

// Boots the client app by creating the API client and the router.

// Root DOM element where every application screen is rendered
const root = document.querySelector("#app");
// Shared HTTP service that communicates with the REST API
const api = new ApiService("/api");
//Controls hash navigation, session validation, and view rendering
const router = new AppRouter({ root, api });

router.start();
