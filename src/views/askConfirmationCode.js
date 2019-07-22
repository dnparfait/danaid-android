exports.create = (nb)=>{
  const {Composite,TextView,TextInput,Button} = require('tabris');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  const conteneur = new Composite({
    left:20,
    right:20,
    top:10,
    bottom:10
  });
  const title = new TextView({
    top:50,
    left:10,
    right:10,
    text:language.askConfirmationCode.title,
    textColor:appBasicsInformations.color.color1,
    font:'20px calibri bold'
  }).appendTo(conteneur);
  const contentText = new TextView({
    top:80,
    left:10,
    right:10,
    text:language.askConfirmationCode.content,
    textColor:appBasicsInformations.color.color1
  }).appendTo(conteneur);
  const phoneNumber = new TextView({
    top:120,
    left:10,
    right:10,
    text:nb,
    font:'18px calibri bold',
    textColor:appBasicsInformations.color.color3
  }).appendTo(conteneur);
  return conteneur;
};
