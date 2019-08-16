exports.create = ()=>{
  const {Page,Composite,Tab,TabFolder,statusBar,DateDialog,Picker,Switch,ScrollView,TextView,TextInput,Button,ImageView} = require('tabris');
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
  const myServicePage = new Page({title:language.userPage.myServicePage.title,
    background:appBasicsInformations.color.color2
  }).appendTo(executeNavigationView);
  const scrollView = new ScrollView({
    top:0,
    left:0,
    right:0,
    bottom:50
  }).appendTo(myServicePage);
  const compositeAddNewSouscription = new Composite({
    top:20,
    right:10,
    left:10,
    cornerRadius:4,
    height:50,
    background:appBasicsInformations.color.color2,
    elevation:3
  }).appendTo(scrollView);
  const addSouscriptionIcon = new ImageView({
   image:'src/icons/plus-circle.png',
   centerY:0,
   left:10,
   height:40,
   width:40
 }).appendTo(compositeAddNewSouscription);
  const compositeWrapperSlide = new Composite({
    top:80,
    left:5,
    right:5,
    height:280
  }).appendTo(scrollView);
  const tab = new TabFolder({left: 0,
     top: 0,
      right: 0,
       bottom: 0,
     selectedTabTintColor:appBasicsInformations.color.color1,
   selectedTabIndicatorTintColor:appBasicsInformations.color.color1})
  .append(new Tab({title: 'Medecin'}))
  .append(new Tab({title: 'Labo'}))
  .append(new Tab({title: 'Hopital'}))
  .append(new Tab({title: 'Pharmacie'}))
  .appendTo(compositeWrapperSlide);
  const bottomMenu = new Composite({
    height:50,
    left:0,
    right:0,
    bottom:0,
    background:appBasicsInformations.color.color2,
    elevation:10
  }).appendTo(myServicePage);
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
   text:language.userPage.myServicePage.bottomMenu[4],
   font:'11px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(bottomMenu);
  const acceptedImageBottom = new ImageView({
   image:'src/icons/checked.png',
   top:5,
   right:210,
   height:20,
   width:25,
 }).on('tap',()=>{
   //
 }).appendTo(bottomMenu);
 const acceptedText = new TextView({
   top:30,
   right:200,
   text:language.userPage.myServicePage.bottomMenu[0],
   font:'11px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(bottomMenu);
 const pendingImageBottom = new ImageView({
  image:'src/icons/more.png',
  top:5,
  right:160,
  height:20,
  width:25
}).appendTo(bottomMenu);
const pendingText = new TextView({
  top:30,
  right:155,
  text:language.userPage.myServicePage.bottomMenu[2],
  font:'10px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
const refusedBottom = new ImageView({
 image:'src/icons/cancel.png',
 top:5,
 right:105,
 height:20,
 width:25
}).on('tap',()=>{
  //
}).appendTo(bottomMenu);
const refusedText = new TextView({
  top:30,
  right:100,
  text:language.userPage.myServicePage.bottomMenu[1],
  font:'10px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
 const aboutUsImageBottom = new ImageView({
  image:'src/icons/warning.png',
  top:5,
  right:35,
  height:20,
  width:25
}).on('tap',()=>{
  //
}).appendTo(bottomMenu);
const aboutUsText = new TextView({
  top:30,
  right:15,
  text:language.userPage.myServicePage.bottomMenu[3],
  font:'10px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
  return myServicePage;
};
