module.exports = ()=>{
  const {Composite,ScrollView,TextView,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const menuComposite = new ScrollView({
    top:50,
    left:10,
    right:10,
    bottom:70
  });
  return menuComposite;
};
