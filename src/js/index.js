import { App } from './App.js';
import { $ } from './utils/utils.js';

const body = $('body');
const app = new App();

body.append(app.node);
