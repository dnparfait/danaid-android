exports.create = ()=>{
  const {Page,Composite,drawer,statusBar,DateDialog,Picker,Switch,ScrollView,TextView,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  statusBar.background = appBasicsInformations.color.color1;
  statusBar.displayMode = 'float';
  drawer.enabled = true;
  const ajax = require('./../helpers/ajax.js');
  const userDrawer = require('./../views/userDrawer.js')().appendTo(drawer);
  let createnavigationView;
  const executeNavigationView = require("../helpers/navigationAnimation.js")(createnavigationView,false);
          // executeNavigationView.toolbarVisible = false;
        //executeNavigationView.on('disappear',function(){this.dispose();});
  const myServicePage = new Page({title:language.userPage.myServicePage.title,
    background:appBasicsInformations.color.color2
  }).appendTo(executeNavigationView);
  const scrollView = new ScrollView({
    top:0,
    left:0,
    right:0,
    bottom:50
  }).appendTo(myServicePage);
  const compositeProfile = new Composite({
    top:5,
    left:100,
    right:100,
    height:150,
    cornerRadius:70,
    background:appBasicsInformations.color.color2,
    elevation:6
  }).appendTo(scrollView);
  const profileIcon = new ImageView({
   image:'src/icons/user-silhouette.png',
   centerY:0,
   left:5,
   right:5,
   top:5,
   bottom:5,
   scaleMode:'fit'
 }).appendTo(compositeProfile);
  const compositeAddNewSouscription = new Composite({
    top:170,
    right:40,
    left:40,
    cornerRadius:4,
    height:50,
    background:appBasicsInformations.color.color2,
    elevation:6
  }).appendTo(scrollView);
  const addSouscriptionIcon = new ImageView({
   image:'src/icons/plus.png',
   centerY:0,
   left:10,
   height:40,
   width:40
 }).appendTo(compositeAddNewSouscription);
  const compositeWrapperSlide = new Composite({
    bottom:10,
    left:5,
    right:5,
    height:280
  }).appendTo(scrollView);
  const backIcon = new ImageView({
   image:'src/icons/back.png',
   centerY:0,
   left:0,
   height:30,
   width:30
 }).appendTo(compositeWrapperSlide);
 const nextIcon = new ImageView({
  image:'src/icons/next2.png',
  centerY:0,
  right:0,
  height:30,
  width:30
}).appendTo(compositeWrapperSlide);
  const compositeMainSlide = new Composite({
    bottom:10,
    left:35,
    right:35,
    top:10,
    bottom:0,
    background:appBasicsInformations.color.color4
  }).appendTo(compositeWrapperSlide);
  const bottomMenu = new Composite({
    height:50,
    left:0,
    right:0,
    bottom:0,
    background:appBasicsInformations.color.color2,
    elevation:10
  }).appendTo(myServicePage);
  const acceptedImageBottom = new ImageView({
   image:'src/icons/checked.png',
   top:5,
   left:15,
   height:25,
   width:30,
 }).appendTo(bottomMenu);
 const acceptedText = new TextView({
   top:30,
   left:10,
   text:language.userPage.myServicePage.bottomMenu[0],
   font:'11px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(bottomMenu);
 const pendingImageBottom = new ImageView({
  image:'src/icons/more.png',
  top:5,
  right:120,
  height:25,
  width:30
}).appendTo(bottomMenu);
const pendingText = new TextView({
  top:30,
  right:115,
  text:language.userPage.myServicePage.bottomMenu[2],
  font:'11px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
const refusedBottom = new ImageView({
 image:'src/icons/cancel.png',
 top:5,
 left:120,
 height:25,
 width:30
}).appendTo(bottomMenu);
const refusedText = new TextView({
  top:30,
  left:110,
  text:language.userPage.myServicePage.bottomMenu[1],
  font:'11px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
 const aboutUsImageBottom = new ImageView({
  image:'src/icons/warning.png',
  top:5,
  right:35,
  height:25,
  width:30
}).appendTo(bottomMenu);
const aboutUsText = new TextView({
  top:30,
  right:15,
  text:language.userPage.myServicePage.bottomMenu[3],
  font:'11px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
  return myServicePage;
};
