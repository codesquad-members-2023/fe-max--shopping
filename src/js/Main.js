import { $ } from './Utils.js';
import { Data } from './Data.js';
import { App } from './App.js';
import { NavbarMainView } from './View/NavBar/NavbarMain.js';
import { NavbarSubView } from './View/NavBar/NavbarSub.js';
import { SearchBarView } from './View/SearchBar/SearchBarView.js';
import { SearchBarModel } from './Model/SearchBarModel.js';
import { SearchBarController } from './Controller/SearchBarController.js';
import { LoginModalView } from './View/Modal/LoginModal.js';
import { LoginModalModel } from './Model/LoginModalModel.js';
import { LoginModalController } from './Controller/LoginModalController.js';
import { ExtendedLoginModalView } from './View/Modal/ExtendedLoginModal.js';
import { ExtendedLoginModalModel } from './Model/ExtendedLoginModalModel.js';
import { ExtendedLoginModalController } from './Controller/ExtendedLoginModalController.js';
import { LocationModalView } from './View/Modal/LocationModal.js';
import { LocationModalModel } from './Model/LocationModalModel.js';
import { LocationModalController } from './Controller/LocationModalController.js';

class Main {
  constructor() {
    this.data = new Data();
    this.App = new App($('body'));

    this.NavBarMain = new NavbarMainView($('header'));
    this.NavBarSub = new NavbarSubView($('.nav-bar'));

    this.SearchBar = new SearchBarView($('.nav-main__search'));
    this.SearchBarModel = new SearchBarModel(this.data.getKeywordData());
    this.SearchBarController = new SearchBarController(this.SearchBarModel, this.SearchBar);

    this.LoginModal = new LoginModalView($('.nav-main__login'));
    this.LoginModalModel = new LoginModalModel();
    this.LoginModalController = new LoginModalController(this.LoginModalModel, this.LoginModal);

    this.ExtendedLoginModal = new ExtendedLoginModalView($('.nav-main__login'));
    this.ExtendedLoginModalModel = new ExtendedLoginModalModel();
    this.ExtendedLoginController = new ExtendedLoginModalController(
      this.ExtendedLoginModalModel,
      this.ExtendedLoginModal
    );

    this.LocationModal = new LocationModalView($('.nav-main__location'));
    this.LocationModalModel = new LocationModalModel();
    this.LocationModalController = new LocationModalController(this.LocationModalModel, this.LocationModal);
  }
}

new Main();
