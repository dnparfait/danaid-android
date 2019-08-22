exports.create = ()=>{
  const {Page,RefreshComposite,AlertDialog,Switch,Popover,statusBar,ImageView,TextView,Composite,Button,ScrollView,TextInput} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  //
  let createnavigationView;
  const executeNavigationView = require("../helpers/navigationAnimation.js")(createnavigationView,false);
          // executeNavigationView.toolbarVisible = false;
        executeNavigationView.on('disappear',function(){this.dispose();});
  //
  if(localStorage.getItem('matricule')){
    const userPage = require('./../views/userPage.js').create();
  }else{
    let dataFromGeolocation = null;
    let language = require('./../helpers/language.js').fr;
    localStorage.setItem('language', 'fr');
    statusBar.background = appBasicsInformations.color.color1;
    statusBar.displayMode = 'float';
    const startPage = new Page({
      background:appBasicsInformations.color.color2
    }).appendTo(executeNavigationView);
    const scrollView = new ScrollView({
      top:0,
      bottom:0,
      left:0,
      right:0
    }).appendTo(startPage);
    const wrapper = new Composite({
      top:20,
      bottom:40,
      left:20,
      right:20
    }).appendTo(scrollView);
    const switchLanguageComposite = new Composite({
      right:15,
      height:50,
      width:100
    }).appendTo(wrapper);
    const frenchLanguage = new TextView({
      centerY:0,
      left:0,
      text:'FR',
      textColor:appBasicsInformations.color.color3
    }).appendTo(switchLanguageComposite);
    const englishLanguage = new TextView({
      centerY:0,
      right:0,
      text:'EN',
      textColor:appBasicsInformations.color.color3
    }).appendTo(switchLanguageComposite);
    const switcher = new Switch({
      centerX:0,
      centerY:0,
      trackOnColor:'#b0b0b0',
      thumbOnColor:appBasicsInformations.color.color1
    }).appendTo(switchLanguageComposite).on('checkedChanged',(e)=>{
      if(e.value === true){
        language = require('./../helpers/language.js').en;
        localStorage.setItem('language', 'en');
        startButton.text = language.welcomePage.buttonMessage;
        welcomeMessage.text = language.welcomePage.welcomeMessage;
      }else{
        language = require('./../helpers/language.js').fr;
        localStorage.setItem('language', 'fr');
        startButton.text = language.welcomePage.buttonMessage;
        welcomeMessage.text = language.welcomePage.welcomeMessage;
      }
    });
    const imageLogo = new ImageView({
      id:"logo",
      centerX:0,
      top:60,
      image:"src/images/danaid-grey.png",
      width:150,
      height:50
    }).appendTo(wrapper);
    const welcomeMessage = new TextView({
      top:50,
      left:20,
      right:20,
      bottom:20,
      font:'16px san-serif',
      markupEnabled:true,
      lineSpacing:1.2,
      text:language.welcomePage.welcomeMessage,
      textColor:appBasicsInformations.color.color3,
      alignment:'centerX'
    }).appendTo(wrapper);
    const startButton = new Button({
      centerX:0,
      height:60,
      bottom:0,
      text:language.welcomePage.buttonMessage,
      background:appBasicsInformations.color.color1,
      cornerRadius:4
    }).on('tap',()=>{
      require('./homePage.js').create(dataFromGeolocation);
    });
    const loader = new RefreshComposite({
      centerX:0,
      bottom:30,
      height:100,
      width:50,
      refreshIndicator:true
    }).appendTo(wrapper);
        const ajax = require('./../helpers/ajax.js');
        //
          let ipAdress = ajax('','https://api.ipify.org?format=json').then((response)=>{
          ajax('','http://api.ipstack.com/'+response.ip+'?access_key=530428304e0270250a52a1c0efe3a0c9').then((response)=>{
                    dataFromGeolocation = response.location;
                    loader.refreshIndicator = false;
                    startButton.appendTo(wrapper);
                    //console.log(response.location.calling_code);
                  }).catch((error)=>{
                      new AlertDialog({
                        title: 'Alerte',
                        message:'Internet connection problem!',
                        buttons: {ok: 'OK'}
                      }).open();
                  });
          });
  }
  return startPage;
};
