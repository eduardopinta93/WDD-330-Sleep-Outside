import { updateCartCount } from "./cartIndicator.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import Alert from "./Alert";

async function init() {
  await loadHeaderFooter();
  updateCartCount();

  const alert = new Alert("/json/alerts.json");
  alert.loadAlerts();
}

init();