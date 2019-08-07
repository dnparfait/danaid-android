exports.create = (dataToSend)=>{
  const {ScrollView,TextView,TextInput,Button} = require('tabris');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  const conteneur = new ScrollView({
    left:20,
    right:20,
    centerY:0,
    height:300,
    background:appBasicsInformations.color.color2,
    elevation:6
  });
  new TextView({
    text:'RECOMMANDATIONS',
    font:'18px calibri bold',
    centerX:0,
    top:10,
    textColor:appBasicsInformations.color.color1
  }).appendTo(conteneur);
  new TextView({
    text:language.recommandationsBySms.content,
    font:'12px calibri bold',
    top:40,
    left:25,
    right:25,
    height:50,
    textColor:appBasicsInformations.color.color3
  }).appendTo(conteneur);
  const phoneNumber1 = new TextInput({
    top:90,
    left:20,
    right:20,
    height:60,
    keyboard:'phone',
    borderColor:appBasicsInformations.color.color3,
    message:'Numero 1',
    textColor:appBasicsInformations.color.color3
  }).appendTo(conteneur);
  const phoneNumber2 = new TextInput({
    top:150,
    left:20,
    right:20,
    height:60,
    keyboard:'phone',
    borderColor:appBasicsInformations.color.color3,
    message:'Numero 2',
    textColor:appBasicsInformations.color.color3
  }).appendTo(conteneur);
  return conteneur;
};
