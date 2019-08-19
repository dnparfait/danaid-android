exports.create = ()=>{
  const {Page,CollectionView,Composite,Tab,TabFolder,statusBar,DateDialog,Picker,Switch,ScrollView,TextView,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  statusBar.background = appBasicsInformations.color.color1;
  statusBar.displayMode = 'float';
  const ajax = require('./../helpers/ajax.js');
  let createnavigationView;
  const executeNavigationView = require('../helpers/navigationAnimation.js')(createnavigationView,false);
          // executeNavigationView.toolbarVisible = false;
        //executeNavigationView.on('disappear',function(){this.dispose();});
  const customCare = new Page({title:language.userPage.userCustomerCarePage.title,
    background:appBasicsInformations.color.color2
  }).appendTo(executeNavigationView);
  const compositeCustomerCare = new ScrollView({
    top:20,
    right:10,
    left:10,
    bottom:100,
    cornerRadius:4,
    background:appBasicsInformations.color.color2,
    elevation:3
  }).appendTo(customCare);
  const compositeAddDeleteDoctor = new Composite({
    top:20,
    right:10,
    left:10,
    cornerRadius:4,
    height:50,
    background:appBasicsInformations.color.color2,
    elevation:3
  }).appendTo(compositeCustomerCare);
  const addDeleteDoctorText = new TextView({
    centerY:0,
    left:80,
    text:language.userPage.userCustomerCarePage.buttonAddDelete,
    font:'14px calibri thin',
    textColor:appBasicsInformations.color.color3
  }).appendTo(compositeAddDeleteDoctor);
  const addDeleteDoctorIcon = new ImageView({
   image:'src/icons/plus-circle.png',
   centerY:0,
   left:10,
   height:40,
   width:40
 }).appendTo(compositeAddDeleteDoctor);
  const compositeSendFile = new Composite({
    top:100,
    right:10,
    left:10,
    cornerRadius:4,
    height:50,
    background:appBasicsInformations.color.color2,
    elevation:3
  }).appendTo(compositeCustomerCare);
  const addDeleteSendFile = new TextView({
    centerY:0,
    left:80,
    text:language.userPage.userCustomerCarePage.buttonSendFile,
    font:'14px calibri thin',
    textColor:appBasicsInformations.color.color3
  }).appendTo(compositeSendFile);
  const sendFileIcon = new ImageView({
   image:'src/icons/sendFile.png',
   centerY:0,
   left:10,
   height:40,
   width:40
 }).appendTo(compositeSendFile);
 const contactUs = new TextView({
   top:190,
   left:50,
   text:language.userPage.userCustomerCarePage.contactUs.contactus,
   font:'18px calibri thin',
   textColor:appBasicsInformations.color.color1
 }).appendTo(compositeCustomerCare);
 const webSiteIcon = new ImageView({
  image:'src/icons/global.png',
  top:242,
  left:20,
  height:20,
  width:20
}).appendTo(compositeCustomerCare);
 const webSiteText = new TextView({
   top:240,
   left:50,
   text:language.userPage.userCustomerCarePage.contactUs.website[0],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color1
 }).appendTo(compositeCustomerCare);
 const webSiteNameText = new TextView({
   top:240,
   left:120,
   text:language.userPage.userCustomerCarePage.contactUs.website[1],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(compositeCustomerCare);
 const telIcon = new ImageView({
  image:'src/icons/phone-call.png',
  top:292,
  left:20,
  height:20,
  width:20
}).appendTo(compositeCustomerCare);
 const telText = new TextView({
   top:290,
   left:50,
   text:language.userPage.userCustomerCarePage.contactUs.tel[0],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color1
 }).appendTo(compositeCustomerCare);
 const telephoneNameText = new TextView({
   top:290,
   left:130,
   text:language.userPage.userCustomerCarePage.contactUs.tel[1],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(compositeCustomerCare);
 const emailIcon = new ImageView({
  image:'src/icons/mail.png',
  top:342,
  left:20,
  height:20,
  width:20
}).appendTo(compositeCustomerCare);
 const emailText = new TextView({
   top:340,
   left:50,
   text:language.userPage.userCustomerCarePage.contactUs.email[0],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color1
 }).appendTo(compositeCustomerCare);
 const emailNameText = new TextView({
   top:340,
   left:100,
   text:language.userPage.userCustomerCarePage.contactUs.email[1],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(compositeCustomerCare);
  const bottomMenu = new Composite({
    height:50,
    left:0,
    right:0,
    bottom:0,
    background:appBasicsInformations.color.color2,
    elevation:10
  }).appendTo(customCare);
  const homeImageBottom = new ImageView({
   image:'src/icons/home.png',
   top:5,
   left:20,
   height:20,
   width:25
 }).on('tap',()=>{
   //We call user homePage
   require('./userPage.js').create();
 }).appendTo(bottomMenu);
 const homeText = new TextView({
   top:30,
   left:15,
   text:language.userPage.userCustomerCarePage.bottomMenu[0],
   font:'11px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(bottomMenu);
 const shareLinkImageBottom = new ImageView({
  image:'src/icons/share.png',
  top:5,
  right:20,
  height:20,
  width:25
}).on('tap',()=>{
  //We call user homePage
  require('./userPage.js').create();
}).appendTo(bottomMenu);
const shareLinkText = new TextView({
  top:30,
  right:15,
  text:language.userPage.userCustomerCarePage.bottomMenu[1],
  font:'11px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
  return customCare;
};
