import { Data } from './sideBarData.js';
import { Renderer } from './renderer.js';
import { SideBar } from './sideBar.js';

const SIDE_BAR_DATA_URL = 'http://localhost:4000/sidebarData';

export class SideBarInit {
  constructor() {
    this.data = new Data(SIDE_BAR_DATA_URL);
    this.renderer = new Renderer();
    this.sideBar = new SideBar(this.data, this.renderer);
  }
}
