import { mount } from "svelte";
import App from "./app.svelte";
import "./index.css";

mount(App, {
    target: document.getElementById("root"),
});
