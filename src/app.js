'use strict';

import {initWelcomePage}  from './pages/WelcomePage.js';

const loadApp = () => {
  initWelcomePage ();
};

window.addEventListener('load', loadApp);
