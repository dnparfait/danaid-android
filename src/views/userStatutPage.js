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
  const statut = new Page({title:language.userPage.statut.title,
    background:appBasicsInformations.color.color2
  }).appendTo(executeNavigationView);
  const compositeStatut = new ScrollView({
    top:20,
    right:10,
    left:10,
    bottom:100,
    cornerRadius:4,
    background:appBasicsInformations.color.color2,
    elevation:3
  }).appendTo(statut);
  const myProfileImage = new ImageView({
    top:10,
    left:20,
    right:20,
    height:100,
   image:'src/icons/user-silhouette.png',
   scaleMode:'fit'
 }).appendTo(compositeStatut);
 const contactUs = new TextView({
   top:190,
   left:50,
   text:language.userPage.userCustomerCarePage.contactUs.contactus,
   font:'18px calibri thin',
   textColor:appBasicsInformations.color.color1
 }).appendTo(compositeStatut);
 const webSiteIcon = new ImageView({
  image:'src/icons/global.png',
  top:242,
  left:20,
  height:20,
  width:20
}).appendTo(compositeStatut);
 const webSiteText = new TextView({
   top:240,
   left:50,
   text:language.userPage.userCustomerCarePage.contactUs.website[0],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color1
 }).appendTo(compositeStatut);
 const webSiteNameText = new TextView({
   top:240,
   left:120,
   text:language.userPage.userCustomerCarePage.contactUs.website[1],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(compositeStatut);
 const telIcon = new ImageView({
  image:'src/icons/phone-call.png',
  top:292,
  left:20,
  height:20,
  width:20
}).appendTo(compositeStatut);
 const telText = new TextView({
   top:290,
   left:50,
   text:language.userPage.userCustomerCarePage.contactUs.tel[0],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color1
 }).appendTo(compositeStatut);
 const telephoneNameText = new TextView({
   top:290,
   left:130,
   text:language.userPage.userCustomerCarePage.contactUs.tel[1],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(compositeStatut);
 const emailIcon = new ImageView({
  image:'src/icons/mail.png',
  top:342,
  left:20,
  height:20,
  width:20
}).appendTo(compositeStatut);
 const emailText = new TextView({
   top:340,
   left:50,
   text:language.userPage.userCustomerCarePage.contactUs.email[0],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color1
 }).appendTo(compositeStatut);
 const emailNameText = new TextView({
   top:340,
   left:100,
   text:language.userPage.userCustomerCarePage.contactUs.email[1],
   font:'14px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(compositeStatut);
  const bottomMenu = new Composite({
    height:50,
    left:0,
    right:0,
    bottom:0,
    background:appBasicsInformations.color.color2,
    elevation:10
  }).appendTo(statut);
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
  return statut;
};
