exports.create = ()=>{
  const {Page,statusBar,ImageView,TextView,Composite,Button,ScrollView,TextInput,app} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  statusBar.background = appBasicsInformations.color.color1;
  statusBar.displayMode = 'float';
  const signIn = new Page({
    background:appBasicsInformations.color.color2
  });
  const scrollView = new ScrollView({
    top:0,
    bottom:0,
    left:0,
    right:0
  }).appendTo(signIn);
  const connectionComposite = new Composite({
    centerY:0,
    left:15,
    right:15,
    height:300,
    background:appBasicsInformations.color.color2,
    elevation:4
  }).appendTo(scrollView);
  const imageLogo = new ImageView({
    centerX:0,
    image:'./src/images/Danaid-grey.png',
    width:200,
    height:100
  }).appendTo(connectionComposite);
  const loginInput = new TextInput({
    top:80,
    left:10,
    right:10,
    height:100,
    message:'Login',
    cornerRadius:4
  }).appendTo(connectionComposite);
  const passwordInput = new TextInput({
    top:132,
    left:10,
    right:10,
    height:100,
    type:'password',
    message:'Password',
    cornerRadius:4
  }).appendTo(connectionComposite);
  const confirmButton = new Button({
    centerX:0,
    width:120,
    height:60,
    bottom:50,
    text:'Sign in',
    background:appBasicsInformations.color.color1,
    cornerRadius:4
  }).appendTo(connectionComposite);
  const forgotPasswordText = new TextView({
    centerX:0,
    height:60,
    bottom:5,
    text:'Forgot your password?',
    textColor:appBasicsInformations.color.color3
  }).appendTo(connectionComposite);
  return signIn;
};
