import "./styles.css";
import { ApiService } from "./services/ApiService.js";
import { AppRouter } from "./router.js";
import { initTheme } from "./utils/theme.js";

initTheme();

// Boots the client app by creating the API client and the router.

const root = document.querySelector("#app");
const api = new ApiService("/api");
const router = new AppRouter({ root, api });

router.start();
