import { createRoot } from "react-dom/client";
import * as bootstrap from "bootstrap";

import './js/navbar'
import './js/testimonials'

import App from "../src/js/components/App";

if (module.hot) {
    module.hot.accept();
}

const container = document.getElementById("iv-container");
const root = createRoot(container);
root.render(<App />);

console.log('%c Welcome to Parcel HTML Starter!!', 'background: #bdc7ff; color: darkred; font-size: 24px; font-weight: bold; padding: 10px;');
document.getElementById("date").innerText = new Date().getFullYear();