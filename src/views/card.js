module.exports = ()=>{
  const {Composite,TextView,ScrollView,RadioButton,TextInput,Button,ImageView} = require('tabris');
  const appBasicsInformations = require('./../helpers/appBasicsInformations.js');
  let language = null;
  if(localStorage.getItem('language') === 'en'){
    language = require('./../helpers/language.js').en;
  }else{
    language = require('./../helpers/language.js').fr;
  };
  const compositeCard = new ScrollView({
    top:100,
    height:300,
    left:10,
    right:10,
    elevation:6
  });
  const myProfileImage = new ImageView({
   image:'src/icons/userGrey.png',
   top:5,
   left:10,
   right:10,
   height:200
 }).appendTo(compositeCard);
  return compositeCard;
};
