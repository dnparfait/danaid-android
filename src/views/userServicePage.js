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
  const bottomMenu = new Composite({
    height:50,
    left:0,
    right:0,
    bottom:0,
    background:appBasicsInformations.color.color2,
    elevation:10
  }).appendTo(myServicePage);
  const myDoctorImageBottom = new ImageView({
   image:'src/icons/checked.png',
   top:5,
   left:15,
   height:25,
   width:30,
 }).appendTo(bottomMenu);
 const myDoctorText = new TextView({
   top:30,
   left:10,
   text:language.userPage.bottomBarre[0],
   font:'12px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(bottomMenu);
 const addUserImageBottom = new ImageView({
  image:'src/icons/more.png',
  top:5,
  right:105,
  height:25,
  width:30
}).appendTo(bottomMenu);
const addUserText = new TextView({
  top:30,
  right:95,
  text:language.userPage.bottomBarre[2],
  font:'12px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
const cardImageBottom = new ImageView({
 image:'src/icons/cancel.png',
 top:5,
 right:197,
 height:25,
 width:30
}).appendTo(bottomMenu);
const cardText = new TextView({
  top:30,
  right:198,
  text:language.userPage.bottomBarre[1],
  font:'12px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
 const settingImageBottom = new ImageView({
  image:'src/icons/warning.png',
  top:5,
  right:15,
  height:25,
  width:30
}).appendTo(bottomMenu);
const settingText = new TextView({
  top:30,
  right:15,
  text:language.userPage.bottomBarre[3],
  font:'12px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
  return myServicePage;
};
