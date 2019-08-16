exports.create = ()=>{
  const {Page,Composite,Popover,drawer,statusBar,DateDialog,Picker,Switch,ScrollView,TextView,TextInput,Button,ImageView} = require('tabris');
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
  const useFamilyPage = new Page({title:language.userPage.userFamilyPage.title,
    background:appBasicsInformations.color.color2
  }).appendTo(executeNavigationView);
  const scrollView = new ScrollView({
    top:0,
    left:0,
    right:0,
    bottom:50
  }).appendTo(useFamilyPage);
  const compositeWrapperSlide = new Composite({
    bottom:10,
    left:5,
    right:5,
    top:10
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
const compositeMainSlide = new ScrollView({
    bottom:20,
    left:35,
    right:35,
    top:10,
    background:appBasicsInformations.color.color4
}).appendTo(compositeWrapperSlide);
const bottomMenu = new Composite({
  height:50,
  left:0,
  right:0,
  bottom:0,
  background:appBasicsInformations.color.color2,
  elevation:10
}).appendTo(useFamilyPage);
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
  text:language.userPage.userFamilyPage.bottomMenu[0],
  font:'11px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
const myDoctorImageBottom = new ImageView({
 image:'src/icons/doctor.png',
 top:5,
 left:80,
 height:25,
 width:30,
}).appendTo(bottomMenu).on('tap',()=>{
 let popover = new Popover();
 const composite = new Composite({
   top:20,
   left:0,
   right:0,
   height:60,
   background:appBasicsInformations.color.color2,
   elevation:6
 });
 let doctorPage = require('./myDoctor.js')();
 popover.contentView.append(doctorPage);
 const leftArrow = new ImageView({
  image:'src/icons/left-arrow.png',
  top:20,
  left:10,
  height:25,
  width:50
}).appendTo(composite).on('tap',()=>{
  popover.close();
});
const titlePopver = new TextView({
  centerY:0,
  left:70,
  textColor:appBasicsInformations.color.color1,
  font:'18px calibri bold',
  text:'MEDECIN'
}).appendTo(composite);
 popover.contentView.append(composite);
 popover.open();
});
const myDoctorText = new TextView({
 top:30,
 left:70,
 text:language.userPage.bottomBarre[0],
 font:'12px calibri thin',
 textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
const addImageBottom = new ImageView({
 image:'src/icons/plus-circle.png',
 top:5,
 right:40,
 height:25,
 width:30
}).on('tap',()=>{
  let popover = new Popover();
  const composite = new Composite({
    top:20,
    left:0,
    right:0,
    height:60,
    background:appBasicsInformations.color.color2,
    elevation:6
  });
  let addFamilyMember = require('./addFamilyMember.js')();
  popover.contentView.append(addFamilyMember);
  const leftArrow = new ImageView({
   image:'src/icons/left-arrow.png',
   top:20,
   left:10,
   height:25,
   width:50
 }).appendTo(composite).on('tap',()=>{
   popover.close();
 });
 const titlePopver = new TextView({
   centerY:0,
   left:70,
   textColor:appBasicsInformations.color.color1,
   font:'18px calibri bold',
   text:'NOUVEAU MEMBRE'
 }).appendTo(composite);
 let confirmAddFamilyMember = new Button({
   width:130,
   height:60,
   right:10,
   bottom:10,
   text:'AJOUTER',
   background:appBasicsInformations.color.color1,
   cornerRadius:4
 });
  popover.contentView.append(composite);
  popover.contentView.append(confirmAddFamilyMember);
  popover.open();
}).appendTo(bottomMenu);
const addText = new TextView({
 top:30,
 right:15,
 text:language.userPage.userFamilyPage.bottomMenu[1],
 font:'10px calibri thin',
 textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
  return useFamilyPage;
};
