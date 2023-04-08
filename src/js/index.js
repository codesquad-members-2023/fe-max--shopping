import { App } from './App.js';
import { $ } from './utils/querySelector.js';

const body = $('body');
const app = new App();

body.append(app.node);
