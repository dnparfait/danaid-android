exports.create = (dataFromGeolocation)=>{
  const {Page,AlertDialog,Switch,Popover,statusBar,ImageView,TextView,Composite,Button,ScrollView,TextInput} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  /*
  let request = require('request');
  console.log(request);
  let sms = require('./../helpers/orangeSms.js')({
    sms_body:'Hello',
    sender_phone:'698075801',
    receiver_number:'698075801',
    area_code:'237',
    authorization_header:'Basic MHRYaW5qQWU5VEd3VVZHSUFXQW1GS2JtWkpVdzBkaEE6MXRmQ0d6aFNSeDA1V1c2OA=='
  });
  sms.then((response)=>console.log(response);
  */
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  statusBar.background = appBasicsInformations.color.color1;
  statusBar.displayMode = 'float';
  /*
  let credentials= 'Basic MHRYaW5qQWU5VEd3VVZHSUFXQW1GS2JtWkpVdzBkaEE6MXRmQ0d6aFNSeDA1V1c2OA==';
  let postData = "";
  postData += "grant_type=client_credentials";
    let options = {
        host: 'api.orange.com',
        path: '/oauth/v2/token',
        outboundSMSMessageRequest:{
          address: "tel:+{{recipient_phone_number}}",
          senderAddress:"tel:+{{dev_phone_number}}",
          outboundSMSTextMessage:{
          message: "Hello!"}
    };
    options['method'] = 'POST';
    options['headers'] = {
        'Authorization': credentials,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    };
    */
  let createnavigationView;
  const executeNavigationView = require("./../helpers/navigationAnimation.js")(createnavigationView,false);
          // executeNavigationView.toolbarVisible = false;
        executeNavigationView.on('disappear',function(){this.dispose();});
  //Functions
  const goToSignUp = ()=>{
    let phoneRegex = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/i;
    if(phoneNumber.text === ''){
      new AlertDialog({
        title: 'Alerte',
        message:language.homePage.alertMessageEmptyField,
        buttons: {ok: 'OK'}
      }).open();
    }else{
      if(!phoneRegex.test(phoneNumber.text)){
        new AlertDialog({
          title: 'Alerte',
          message:language.homePage.alertMessageInvalidPhoneNumber,
          buttons: {ok: 'OK'}
        }).open();
      }else{
        let randomCode = 2019 +(Math.floor(Math.random() * 1000) + 1);
        require("./../modules/sendCode.js").create(randomCode);
        //Countdown for code CONFIRMATION
        setTimeout(()=>{
          randomCode = 0;
        },120000);
        //
        //We ask code
        const popup = new Popover();
        let nb = phoneIndicatif.message+phoneNumber.text;
        localStorage.setItem('telephone',nb);
        let popoverContent = require('./askConfirmationCode.js').create(nb);
        popup.contentView.append(popoverContent);
        const cancel = new Button({
          left:10,
          height:60,
          bottom:20,
          textColor:appBasicsInformations.color.color1,
          text:language.askConfirmationCode.buttonCancel,
          background:appBasicsInformations.color.color2,
          cornerRadius:4
        }).on('tap',()=>{
          popup.close();
        });
        const codeInput = new TextInput({
          top:200,
          left:10,
          right:20,
          height:60,
          keyboard:'phone',
          borderColor:appBasicsInformations.color.color3,
          message:'Code',
          textColor:appBasicsInformations.color.color3
        });
        const confirm = new Button({
          right:10,
          height:60,
          bottom:20,
          text:language.askConfirmationCode.buttonConfirm,
          background:appBasicsInformations.color.color1,
          cornerRadius:4
        }).appendTo(buttonComposite).on('tap',()=>{
            if(codeInput.text == randomCode){
              popup.close();
              require('./signUp.js').create().appendTo(executeNavigationView);
            }else{
              new AlertDialog({
                title: 'Alerte',
                message:'Code incorrect!',
                buttons: {ok: 'OK'}
              }).open();
            }
        });
        popup.contentView.append(codeInput);
        popup.contentView.append(confirm);
        popup.contentView.append(cancel);
        popup.open();
      }
    }
  };
  const homePage = new Page({
    background:appBasicsInformations.color.color2
  }).appendTo(executeNavigationView);
  const scrollView = new ScrollView({
    top:0,
    bottom:0,
    left:0,
    right:0
  }).appendTo(homePage);
  const buttonComposite = new Composite({
    centerY:0,
    left:15,
    right:15,
    height:280,
    background:appBasicsInformations.color.color2,
    elevation:6
  }).appendTo(scrollView);
  const flagComposite = new Composite({
    top:10,
    right:15,
    height:40,
    width:40
  }).appendTo(buttonComposite);
  const countryFlag = new ImageView({
    top:0,
    left:0,
    right:0,
    bottom:0,
    scaleMode:'fit',
    image:dataFromGeolocation.country_flag,
  }).appendTo(flagComposite);
  const imageLogo = new ImageView({
    centerX:0,
    top:40,
    image:"src/images/danaid-grey.png",
    width:200,
    height:100
  }).appendTo(buttonComposite);
  const phoneIndicatif = new TextInput({
    left:20,
    width:70,
    top:130,
    height:60,
    keyboard:'phone',
    borderColor:appBasicsInformations.color.color3,
    message:dataFromGeolocation.calling_code,
    textColor:appBasicsInformations.color.color3
  }).appendTo(buttonComposite);
  const phoneNumber = new TextInput({
    left:100,
    right:20,
    top:130,
    height:60,
    keyboard:'phone',
    borderColor:appBasicsInformations.color.color3,
    message:language.homePage.telephoneMessage,
    textColor:appBasicsInformations.color.color3
  }).appendTo(buttonComposite);
  const nextButton = new Button({
    right:10,
    height:60,
    bottom:20,
    text:language.homePage.buttonConfirm,
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(buttonComposite).on('tap',goToSignUp);
  return homePage;
};
