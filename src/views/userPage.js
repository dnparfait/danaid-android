exports.create = ()=>{
  const {Page,SearchAction,drawer,AlertDialog,Switch,Popover,statusBar,ImageView,TextView,Composite,Button,ScrollView,TextInput} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = require('./../helpers/language.js').fr;
  statusBar.background = appBasicsInformations.color.color1;
  statusBar.displayMode = 'float';
  drawer.enabled = true;

  const ajax = require('./../helpers/ajax.js');
  const userDrawer = require('./../views/userDrawer.js')().appendTo(drawer);
  let createnavigationView;
  const executeNavigationView = require("../helpers/navigationAnimation.js")(createnavigationView,false);
          // executeNavigationView.toolbarVisible = false;
        executeNavigationView.on('disappear',function(){this.dispose();});
  const userPage = new Page({
    background:appBasicsInformations.color.color2
  }).appendTo(executeNavigationView);
  const scrollView = new ScrollView({
    top:0,
    left:0,
    right:0,
    bottom:50
  }).appendTo(userPage);
  const menuComposite = new Composite({
    id:'list_menu',
    top:0,
    left:10,
    right:10,
    bottom:0,
  }).appendTo(scrollView);
  const services = new Button({
    right:0,
    left:0,
    height:60,
    top:20,
    text:'Nos services',
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  const chooseAdoctor = new Button({
    right:0,
    left:0,
    height:60,
    top:80,
    text:'Choisir un médecin',
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  const myFunds = new Button({
    right:0,
    left:0,
    height:60,
    top:140,
    text:'Mes cotisations',
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  const manageMyFamily = new Button({
    right:0,
    left:0,
    height:60,
    top:200,
    text:'Gerer les soins de ma famille',
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  const addMember = new Button({
    right:0,
    left:0,
    height:60,
    top:260,
    text:'Ajouter un membre de ma famille',
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  /*const topSearchBar = new Composite({
    height:50,
    left:0,
    right:0,
    top:0,
    background:'#e4e1e3',
    elevation:10
  }).appendTo(userPage);*/
  const bottomMenu = new Composite({
    height:50,
    left:0,
    right:0,
    bottom:0,
    background:'#e4e1e3',
    elevation:10
  }).appendTo(userPage);
  const homeImageBottom = new ImageView({
   image:'src/icons/home-icon-silhouette.png',
   centerY:0,
   left:10,
   height:30,
   width:30
 }).appendTo(bottomMenu);
 const itemsTest = ['apple', 'banana', 'cherry'];
 /*const searchImageBottom = new ImageView({
  image:'src/icons/magnifier.png',
  centerY:0,
  right:100,
  height:30,
  width:30
}).appendTo(bottomMenu).on("tap",()=>{console.log('search');
  let searchAction = new SearchAction({title: 'Search', image: 'src/icons/home-icon-silhouette.png'})
  .onInput(event => items.filter(proposal => proposal.indexOf(event.query) !== -1))
  .onAccept(event => console.log(`Showing content for ${event.text}`))
  .appendTo(topSearchBar);
  searchAction.open();
});*/
const mailImageBottom = new ImageView({
 image:'src/icons/close-envelope.png',
 centerY:0,
 right:200,
 height:30,
 width:30
}).appendTo(bottomMenu);
 const settingImageBottom = new ImageView({
  image:'src/icons/settings-work-tool.png',
  centerY:0,
  right:10,
  height:30,
  width:30
}).appendTo(bottomMenu).on('tap',()=>{
  drawer.open();
});
//User menu

  return userPage;
};
