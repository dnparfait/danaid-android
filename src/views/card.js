module.exports = ()=>{
  const {Composite,TextView,RadioButton,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const compositeService = new Composite({
    top:100,
    height:300,
    left:10,
    right:10,
    elevation:6,
    background:appBasicsInformations.color.color1
  });
  return compositeService;
};
