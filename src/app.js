'use strict';

import {initWelcomePage}  from './pages/WelcomePage.js';
import {loadSearch}  from './pages/searchPage.js';

const loadApp = () => {
  initWelcomePage ();
};

window.addEventListener('load', () => {
  loadApp();
  loadSearch ();
});
