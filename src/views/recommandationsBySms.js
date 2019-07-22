exports.create = ()=>{
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
    top:180,
    bottom:180,
    background:appBasicsInformations.color.color2,
    elevation:6
  });
  const phoneNumber1 = new TextInput({
    top:50,
    left:20,
    right:20,
    height:60,
    keyboard:'phone',
    borderColor:appBasicsInformations.color.color3,
    message:'Numero 1',
    textColor:appBasicsInformations.color.color3
  }).appendTo(conteneur);
  const phoneNumber2 = new TextInput({
    top:110,
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
