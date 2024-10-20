import { Buffer } from "buffer";
import process from "process"; // Add this line to import the process polyfill

window.Buffer = window.Buffer ?? Buffer;
window.process = window.process ?? process; // Add this line to define process in the window object