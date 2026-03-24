import Alert from "./Alert";
import {loadHeaderFooter} from "./utils.mjs";

loadHeaderFooter();

const alert = new Alert("/json/alerts.json")
alert.loadAlerts();