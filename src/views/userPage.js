exports.create = ()=>{
  const {Page,DateDialog,SearchAction,NavigationView,RadioButton,drawer,AlertDialog,Switch,Popover,statusBar,ImageView,TextView,Composite,Button,ScrollView,TextInput} = require('tabris');
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
  const userPage = new Page({title:language.userPage.title,
    background:appBasicsInformations.color.color2
  }).appendTo(executeNavigationView);
  const scrollView = new ScrollView({
    top:0,
    left:0,
    right:0,
    bottom:50
  }).appendTo(userPage);
  const menuComposite = new ScrollView({
    id:'list_menu',
    top:0,
    left:10,
    right:10,
    bottom:0
  }).appendTo(scrollView);
  const services = new Composite({
    right:175,
    left:0,
    height:200,
    top:20,
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
   const titlePopver = new TextView({
     centerY:0,
     left:70,
     textColor:appBasicsInformations.color.color1,
     font:'18px calibri bold',
     text:'SERVICE'
   }).appendTo(composite);
    popover.contentView.append(composite);
    popover.contentView.append(confirmService);
    popover.open();
  });
  const serviceIcon = new ImageView({
   image:'src/icons/delivery.png',
   centerX:0,
   centerY:0,
   height:80,
   width:80
 }).appendTo(services);
 const serviceText = new TextView({
   bottom:20,
   centerX:0,
   text:language.userPage.menuPrincipal[0],
   font:'12px calibri thin',
   textColor:appBasicsInformations.color.color2
 }).appendTo(services);
  /*const chooseAdoctor = new Button({
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
      });*/
  const myFunds = new Composite({
    right:0,
    left:175,
    height:200,
    top:20,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  const myFundsIcon = new ImageView({
   image:'src/icons/piggy-bank-with-dollar-coin.png',
   centerX:0,
   centerY:0,
   height:80,
   width:80
 }).appendTo(myFunds);
 const myFundsText = new TextView({
   bottom:20,
   centerX:0,
   text:language.userPage.menuPrincipal[2],
   font:'12px calibri thin',
   textColor:appBasicsInformations.color.color2
 }).appendTo(myFunds);
  const manageMyFamily = new Composite({
    right:175,
    left:0,
    height:200,
    top:230,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  const myFamilyIcon = new ImageView({
   image:'src/icons/family.png',
   centerX:0,
   centerY:0,
   height:80,
   width:80
 }).appendTo(manageMyFamily);
 const myFamilyText = new TextView({
   bottom:20,
   centerX:0,
   text:language.userPage.menuPrincipal[3],
   font:'12px calibri thin',
   textColor:appBasicsInformations.color.color2
 }).appendTo(manageMyFamily);
  const careRecord = new Composite({
    right:0,
    left:175,
    height:200,
    top:230,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(menuComposite);
  const careRecordIcon = new ImageView({
   image:'src/icons/medical-prescription.png',
   centerX:0,
   centerY:0,
   height:80,
   width:80
 }).appendTo(careRecord);
 const careRecordText = new TextView({
   bottom:20,
   centerX:0,
   text:language.userPage.menuPrincipal[4],
   font:'12px calibri thin',
   textColor:appBasicsInformations.color.color2
 }).appendTo(careRecord);
  const bottomMenu = new Composite({
    height:50,
    left:0,
    right:0,
    bottom:0,
    background:appBasicsInformations.color.color2,
    elevation:10
  }).appendTo(userPage);
  const myDoctorImageBottom = new ImageView({
   image:'src/icons/doctor.png',
   top:5,
   left:15,
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
   left:10,
   text:language.userPage.bottomBarre[0],
   font:'12px calibri thin',
   textColor:appBasicsInformations.color.color3
 }).appendTo(bottomMenu);
 const addUserImageBottom = new ImageView({
  image:'src/icons/add-contact.png',
  top:5,
  right:105,
  height:25,
  width:30
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
});
const addUserText = new TextView({
  top:30,
  right:95,
  text:language.userPage.bottomBarre[2],
  font:'12px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
const cardImageBottom = new ImageView({
 image:'src/icons/card.png',
 top:5,
 right:197,
 height:25,
 width:30
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
  let servicesPage = require('./card.js')();
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
 const titlePopver = new TextView({
   centerY:0,
   left:70,
   textColor:appBasicsInformations.color.color1,
   font:'18px calibri bold',
   text:'CARD'
 }).appendTo(composite);
  popover.contentView.append(composite);
  popover.open();
});
const cardText = new TextView({
  top:30,
  right:198,
  text:language.userPage.bottomBarre[1],
  font:'12px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
 const settingImageBottom = new ImageView({
  image:'src/icons/controls.png',
  top:5,
  right:15,
  height:25,
  width:30
}).appendTo(bottomMenu).on('tap',()=>{
  drawer.open();
});
const settingText = new TextView({
  top:30,
  right:15,
  text:language.userPage.bottomBarre[3],
  font:'12px calibri thin',
  textColor:appBasicsInformations.color.color3
}).appendTo(bottomMenu);
//User menu

  return userPage;
};
