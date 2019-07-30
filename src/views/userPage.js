exports.create = ()=>{
  const {Page,SearchAction,NavigationView,RadioButton,drawer,AlertDialog,Switch,Popover,statusBar,ImageView,TextView,Composite,Button,ScrollView,TextInput} = require('tabris');
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
    text:language.userPage.menuPrincipal[0],
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite).on('tap',()=>{
    let popover = new Popover();
    const composite = new Composite({
      top:20,
      left:0,
      right:0,
      height:60,
      background:appBasicsInformations.color.color2,
      elevation:6
    });
    let servicesPage = require('./servicesPage.js')();
    popover.contentView.append(servicesPage);
    const leftArrow = new ImageView({
     image:'src/icons/left-arrow.png',
     top:20,
     left:10,
     height:25,
     width:50
   }).appendTo(composite).on('tap',()=>{
     popover.close();
   });
   const confirmService = new Button({
     width:130,
     height:60,
     right:10,
     bottom:20,
     text:'CONFIRM',
     background:appBasicsInformations.color.color1,
     cornerRadius:4
   });
    popover.contentView.append(composite);
    popover.contentView.append(confirmService);
    popover.open();
  });
  const chooseAdoctor = new Button({
    right:0,
    left:0,
    height:60,
    top:80,
    text:language.userPage.menuPrincipal[1],
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite).on('tap',()=>{
        let popover = new Popover();
        const composite = new Composite({
          top:20,
          left:0,
          right:0,
          height:60,
          background:appBasicsInformations.color.color2,
          elevation:6
        });
        let searchDoctor = require('./searchDoctor.js')();
        popover.contentView.append(searchDoctor);
        const leftArrow = new ImageView({
         image:'src/icons/left-arrow.png',
         top:20,
         left:10,
         height:25,
         width:50
       }).appendTo(composite).on('tap',()=>{
         popover.close();
       });
       let confirmSearchDoctor = new Button({
         width:130,
         height:60,
         right:10,
         bottom:10,
         text:'CONFIRM',
         background:appBasicsInformations.color.color1,
         cornerRadius:4
       });
        popover.contentView.append(composite);
        popover.contentView.append(confirmSearchDoctor);
        popover.open();
      });
  const myFunds = new Button({
    right:0,
    left:0,
    height:60,
    top:140,
    text:language.userPage.menuPrincipal[2],
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  const manageMyFamily = new Button({
    right:0,
    left:0,
    height:60,
    top:200,
    text:language.userPage.menuPrincipal[3],
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  const addMember = new Button({
    right:0,
    left:0,
    height:60,
    top:260,
    text:language.userPage.menuPrincipal[4],
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite).on('tap',()=>{
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
     let confirmAddFamilyMember = new Button({
       width:130,
       height:60,
       right:10,
       bottom:10,
       text:'CONFIRM',
       background:appBasicsInformations.color.color1,
       cornerRadius:4
     });
      popover.contentView.append(composite);
      popover.contentView.append(confirmAddFamilyMember);
      popover.open();
  });
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
    background:appBasicsInformations.color.color2,
    elevation:10
  }).appendTo(userPage);
  const homeImageBottom = new ImageView({
   image:'src/icons/home-icon-silhouette.png',
   top:5,
   left:10,
   height:25,
   width:30,
 }).appendTo(bottomMenu);
 const homeText = new TextView({
   top:30,
   left:10,
   text:'Home',
   font:'12px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(bottomMenu);
 const itemsTest = ['apple', 'banana', 'cherry'];
 const searchImageBottom = new ImageView({
  image:'src/icons/magnifier.png',
  top:5,
  right:100,
  height:25,
  width:30
}).appendTo(bottomMenu).on("tap",()=>{
  const items = ['apple', 'banana', 'cherry'];
  new SearchAction({title: 'Search',
   image: 'src/icons/magnifier.png',
 text:'Recherche...'}).onInput(event => items.filter(proposal => proposal.indexOf(event.query) !== -1))
  .onAccept(event => console.log(`Showing content for ${event.text}`)).appendTo(executeNavigationView);
});
const searchText = new TextView({
  top:30,
  right:100,
  text:'Search',
  font:'12px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
const mailImageBottom = new ImageView({
 image:'src/icons/close-envelope.png',
 top:5,
 right:197,
 height:25,
 width:30
}).appendTo(bottomMenu);
const mailText = new TextView({
  top:30,
  right:200,
  text:'Mail',
  font:'12px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
 const settingImageBottom = new ImageView({
  image:'src/icons/settings-work-tool.png',
  top:5,
  right:15,
  height:25,
  width:30
}).appendTo(bottomMenu).on('tap',()=>{
  drawer.open();
});
const settingText = new TextView({
  top:30,
  right:10,
  text:'Setting',
  font:'12px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
//User menu

  return userPage;
};
