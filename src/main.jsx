import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "@radix-ui/themes/styles.css";

import { Theme, ThemePanel } from "@radix-ui/themes";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <Theme accentColor="amber" radius="large">
            <App />
            {/* <ThemePanel /> */}
        </Theme>
    </BrowserRouter>
);
