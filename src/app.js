const {NavigationView,contentView,Popover} = require('tabris');
//const welcomePage = require('./views/welcomePage.js').create();
//const userPage = require('./views/userPage.js').create();
//const doctorPage = require('./views/doctorPage.js').create();
//const pharmacyPage = require('./views/pharmacyPage.js').create();
//const healthCenterPage = require('./views/healthCenterPage.js').create();
//const sponsorPage = require('./views/sponsorPage.js').create();
let createnavigationView;
const executeNavigationView = require("./helpers/navigationAnimation.js")(createnavigationView,false);
        // executeNavigationView.toolbarVisible = false;
      executeNavigationView.on('disappear',function(){this.dispose();});
      const userSignUpForm = require('./views/userSignUpForm.js').create().appendTo(executeNavigationView);

//const signUp = require('./views/signUp.js').create().appendTo(executeNavigationView);
//const reco = require('./views/recommandationsBySms.js').create();
const signUp = require('./views/signUp.js').create().appendTo(executeNavigationView);
/*let popover = new Popover();
popover.contentView.append(signUp);
popover.open();*/
