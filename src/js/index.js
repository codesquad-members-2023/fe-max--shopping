import { App } from './App.js';

const body = document.querySelector('body');
const app = new App();

body.append(app.node);
