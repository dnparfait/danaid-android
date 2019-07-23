exports.create = ()=>{
  const {Page,contentView,Popover,statusBar,ImageView,TextView,Composite,Button,ScrollView,TextInput,app} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  statusBar.background = appBasicsInformations.color.color1;
  statusBar.displayMode = 'float';
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const signUp = new Page({
    background:appBasicsInformations.color.color2
  });
  let createnavigationView;
  const executeNavigationView = require("./../helpers/navigationAnimation.js")(createnavigationView,false);
          // executeNavigationView.toolbarVisible = false;
        executeNavigationView.on('disappear',function(){this.dispose();});
  //Functions
  const goToPharmacySignUpForm = (id)=>{
    let popup = new Popover();
    let form = require('./pharmacySignUpForm.js').create();
    popup.contentView.append(form);
    popup.open();
  };
  const goToClinicSignUpForm = (id)=>{
    let popup = new Popover();
    let form = require('./pharmacySignUpForm.js').create();
    popup.contentView.append(form);
    popup.open();
  };
  const goSponsorSignUpForm = (id)=>{
    let popup = new Popover();
    let form = require('./sponsorSignUpForm.js').create();
    popup.contentView.append(form);
    popup.open();
  };
  const goToLaboratorySignUpForm = (id)=>{
    let popup = new Popover();
    let form = require('./laboratorySignUpForm.js').create();
    popup.contentView.append(form);
    popup.open();
  };
  const goToUserSignUpForm = (id)=>{
    let popup = new Popover();
    let form = require('./userSignUpForm.js').create();
    popup.contentView.append(form);
    popup.open();
  };
  const goToDoctorSignUpForm = (id)=>{
    let popup = new Popover();
    let form = require('./doctorSignUpForm.js').create();
    const backArrowImage = new ImageView({
      left:0,
      bottom:25,
      image:'src/icons/left-arrow.png',
      width:80,
      height:30
    }).on('tap',()=>{
      popup.close();
    });
    form.append(backArrowImage);
    popup.contentView.append(form);
    popup.open();
  };
  const scrollView = new ScrollView({
    top:0,
    bottom:0,
    left:0,
    right:0
  }).appendTo(signUp);
  const connectionComposite = new Composite({
    centerY:0,
    left:15,
    right:15,
    height:420,
    background:appBasicsInformations.color.color2,
    elevation:4
  }).appendTo(scrollView);
  const imageLogo = new ImageView({
    centerX:0,
    image:'src/images/danaid-grey.png',
    width:200,
    height:100
  }).appendTo(connectionComposite);
  const chooseAProfileText = new TextView({
    centerX:0,
    height:60,
    top:60,
    text:language.chooseAProfilePage.firstText,
    textColor:appBasicsInformations.color.color3
  }).appendTo(connectionComposite);
  const userButton = new Button({
    id:'userButton',
    left:25,
    right:25,
    height:60,
    top:100,
    text:language.chooseAProfilePage.profileList[0],
    textColor:appBasicsInformations.color.color2,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite).on('tap',goToUserSignUpForm);
  const pharmacyButton = new Button({
    id:'pharmacyButton',
    left:25,
    right:25,
    height:60,
    top:150,
    text:language.chooseAProfilePage.profileList[1],
    textColor:appBasicsInformations.color.color2,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite).on('tap',goToPharmacySignUpForm);
  const doctorButton = new Button({
    id:'doctorButton',
    left:25,
    right:25,
    height:60,
    top:200,
    text:language.chooseAProfilePage.profileList[2],
    textColor:appBasicsInformations.color.color2,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite).on('tap',goToDoctorSignUpForm);
  const laboratoryButton = new Button({
    id:'laboratoryButton',
    left:25,
    right:25,
    height:60,
    top:250,
    text:language.chooseAProfilePage.profileList[3],
    textColor:appBasicsInformations.color.color2,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite).on('tap',goToLaboratorySignUpForm);
  const healthCenterButton = new Button({
    id:'healthCenterButton',
    left:25,
    right:25,
    height:60,
    top:300,
    text:language.chooseAProfilePage.profileList[4],
    textColor:appBasicsInformations.color.color2,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite).on('tap',goToClinicSignUpForm);
  const sponsorButton = new Button({
    id:'healthCenterButton',
    left:25,
    right:25,
    height:60,
    top:350,
    text:language.chooseAProfilePage.profileList[5],
    textColor:appBasicsInformations.color.color2,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite).on('tap',goSponsorSignUpForm);
  return signUp;
};
